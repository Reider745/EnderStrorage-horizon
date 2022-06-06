let containes_chest: {[key: string]: ItemContainer} = {};
class ClientTileEntity {
    networkData: any;
    x: number;
    y: number;
    z: number;

    model_0: any;
    model_1: any;
    model_2: any;
    model_3: any

    constructor(model_0: any, model_1: any, model_2: any, model_3: any){
        this.model_0 = model_0;
        this.model_1 = model_1;
        this.model_2 = model_2;
        this.model_3 = model_3;
    }
    updateModel(): void {
        let id = Network.serverToLocalId(this.networkData.getInt("id"));
        if(id == -1)
            BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
        let data = Network.serverToLocalId(this.networkData.getInt("data"));
        let wool_1 = this.networkData.getInt("1");
        let wool_2 = this.networkData.getInt("2");
        let wool_3 = this.networkData.getInt("3");
        switch(data){
            case 0:
                BlockRenderer.mapAtCoords(this.x, this.y, this.z, this.model_1({
                    "wool_3": {texture:VanillaBlockID.wool, data: wool_1},
                    "wool_2": {texture:VanillaBlockID.wool, data: wool_2},
                    "wool_1": {texture:VanillaBlockID.wool, data: wool_3}
                }, id, data).getICRenderModel());
            break;
            case 1:
                BlockRenderer.mapAtCoords(this.x, this.y, this.z, this.model_0({
                    "wool_1": {texture:VanillaBlockID.wool, data: wool_1},
                    "wool_2": {texture:VanillaBlockID.wool, data: wool_2},
                    "wool_3": {texture:VanillaBlockID.wool, data: wool_3}
                }, id, data).getICRenderModel());
            break;
            case 2:
                BlockRenderer.mapAtCoords(this.x, this.y, this.z, this.model_3({
                    "wool_1": {texture:VanillaBlockID.wool, data: wool_1},
                    "wool_2": {texture:VanillaBlockID.wool, data: wool_2},
                    "wool_3": {texture:VanillaBlockID.wool, data: wool_3}
                }, id, data).getICRenderModel());
            break;
            case 3:
                BlockRenderer.mapAtCoords(this.x, this.y, this.z, this.model_2({
                    "wool_3": {texture:VanillaBlockID.wool, data: wool_1},
                    "wool_2": {texture:VanillaBlockID.wool, data: wool_2},
                    "wool_1": {texture:VanillaBlockID.wool, data: wool_3}
                }, id, data).getICRenderModel());
            break;
        }
    }

    load(): void {
        this.updateModel();
        let self = this;
        this.networkData.addOnDataChangedListener(function(){
            self.updateModel();
        });
    }
    unload(): void {
    }
}
class EnderTileBase extends TileEntityBase {
    useNetworkItemContainer = true;
    networkEntityType: any;
    client: any;
    defaultValues = {
        wools:null
    };

    constructor(client: any){
        super();
        this.client = client;
    }

    getContainer(): ItemContainer {
        return null;
    }
    updateModel(): void {
        if(this.data.wools == null)
            this.data.wools = [0, 0, 0];
        if(!this[this.x+"."+this.y+"."+this.z])
            this[this.x+"."+this.y+"."+this.z] = this.blockSource.getBlock(this.x, this.y, this.z);
        let block = this[this.x+"."+this.y+"."+this.z];
        this.networkData.putInt("id", block.id);
        this.networkData.putInt("data", block.data);
        this.networkData.putInt("1", this.data.wools[0] || 0);
        this.networkData.putInt("2", this.data.wools[1] || 0);
        this.networkData.putInt("3", this.data.wools[2] || 0);
        this.networkData.sendChanges();
    }
    tick(): void {
        StorageInterface.checkHoppers(this);
        this.container.sendChanges();

        this.updateModel();
    }
    init(): void {
        if(this.data.wools == null)
            this.data.wools = [0, 0, 0];
        this.container = this.getContainer();
        this.container.setClientContainerTypeName(this.networkEntityType.getTypeName());
        VanillaSlots.registerServerEventsForContainer(this.container);
    }
    destroy(): boolean {
        this.networkData.putInt("id", -1);
        this.networkData.sendChanges();
        return true;
    }
    getScreenName(player: number, coords: Callback.ItemUseCoordinates): string {
        return "main";
    }

    static getContainerChest(wools: number[]): ItemContainer {
        let key = wools[0]+"."+wools[1]+"."+wools[2];
        if(!containes_chest[key])
            containes_chest[key] = new ItemContainer();
        return containes_chest[key];
    }
};
Network.addClientPacket("unmapAtCoords", function(data: any){
    BlockRenderer.unmapAtCoords(data.x, data.y, data.z);
});
Callback.addCallback("DestroyBlock", function(coords, block, player){
    let client = Network.getClientForPlayer(player);
    if(client != null)
        client.send("unmapAtCoords", coords);
});
Callback.addCallback("LevelLeft", function(){
    containes_chest = {};
});
Saver.addSavesScope("ender_chest", (obj: any) => {
    containes_chest = obj.containes_chest;
}, () => {
    return {
        containes_chest: containes_chest
    };
});