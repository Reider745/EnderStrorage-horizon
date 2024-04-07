IDRegistry.genBlockID("ender_storage");
Block.createBlockWithRotation("ender_storage", [{
    name: "Ender Storage",
    texture: [
        ["down_ender_chest", 0],
        ["up_ender_chest", 0],
        ["side_ender_chest", 0],
        ["front_ender_chest", 0],
        ["side_ender_chest", 0],
        ["side_ender_chest", 0]
    ],
    inCreative: true
}]);
Translation.addTranslation("Ender Storage", {
    ru: "Эндер сундук"
});

let DEFAULT_boxes = {"wool_1": {texture:VanillaBlockID.wool, data: 0}, "wool_2": {texture:VanillaBlockID.wool, data: 0}, "wool_3": {texture:VanillaBlockID.wool, data: 0}};
let INSTANCE_chest_0: RenderUtil.Model = chest_0(DEFAULT_boxes, BlockID.ender_storage, 1);
let INSTANCE_chest_1: RenderUtil.Model = chest_1(DEFAULT_boxes, BlockID.ender_storage, 0);
let INSTANCE_chest_2: RenderUtil.Model = chest_2(DEFAULT_boxes, BlockID.ender_storage, 3);
let INSTANCE_chest_3: RenderUtil.Model = chest_3(DEFAULT_boxes, BlockID.ender_storage, 2);

BlockRenderer.setCustomCollisionAndRaycastShape(BlockID.ender_storage, 0, INSTANCE_chest_1.getCollisionShape());
BlockRenderer.setCustomCollisionAndRaycastShape(BlockID.ender_storage, 1, INSTANCE_chest_0.getCollisionShape());
BlockRenderer.setCustomCollisionAndRaycastShape(BlockID.ender_storage, 2, INSTANCE_chest_3.getCollisionShape());
BlockRenderer.setCustomCollisionAndRaycastShape(BlockID.ender_storage, 3, INSTANCE_chest_2.getCollisionShape());

BlockRenderer.enableCoordMapping(BlockID.ender_storage, 0, INSTANCE_chest_1.getICRenderModel());
BlockRenderer.enableCoordMapping(BlockID.ender_storage, 1, INSTANCE_chest_0.getICRenderModel());
BlockRenderer.enableCoordMapping(BlockID.ender_storage, 2, INSTANCE_chest_3.getICRenderModel());
BlockRenderer.enableCoordMapping(BlockID.ender_storage, 3, INSTANCE_chest_2.getICRenderModel());

let ChestUI = new UI.StandardWindow({
    standard:{
        "header": {
            "text": {
                "text": Translation.translate("Ender Storage")
            }
        },
        "background": {
            "standard": true,
        },
        "inventory": {
            "standard":true
        }
    },
    elements: {}
});

(function(x, y, size){
    let content = ChestUI.getContent();
    let c = 0;
    for(let i = 0;i < 9;i++)
        for (let j = 0; j < 3; j++){
            content.elements["slot_"+c] = {"type":"slot",x:x+(size*i),y:y+(size*j),size:size};
            c++;
        }
})(10, 10, 110);
VanillaSlots.registerForWindow(ChestUI);

let containes_chest: {[key: string]: ItemContainer} = {};
class ClientTileEntity {
    networkData: SyncedNetworkData;
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
    public updateModel(): void {
        let id = Network.serverToLocalId(this.networkData.getInt("id"));
        let data = this.networkData.getInt("data");
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

    public load(): void {
        this.updateModel();
        let self = this;
        this.networkData.addOnDataChangedListener(function(data, key){
            self.updateModel();
        });
    }
    public unload(): void {
        BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
    }
}

class TileChest extends EnderTileBase {
    public getContainer(): ItemContainer {
        let key = this.data.wools[0]+"."+this.data.wools[1]+"."+this.data.wools[2];
        if(!containes_chest[key])
            return containes_chest[key] = new ItemContainer();
        return containes_chest[key];
    }

    public getScreenByName(screenName: string): UI.IWindow {
        return ChestUI;
    }

    public onItemUse(coords: Callback.ItemUseCoordinates, item: ItemStack, player: number): boolean {
        let model = INSTANCE_chest_0;
        let data = this.blockSource.getBlockData(this.x, this.y, this.z);
        if(this.blockSource.getBlockData(this.x, this.y, this.z) > 1)
            model = INSTANCE_chest_2;

        let wool_1 = model.getBoxes()["wool_1"];
        let wool_2 = model.getBoxes()["wool_2"];
        let wool_3 = model.getBoxes()["wool_3"];

        let pos = {x: coords.vec.x - coords.x, y: coords.vec.y - coords.y, z: coords.vec.z - coords.z};

        if(RenderUtil.isClick(pos.x, pos.y, pos.z, wool_1) && item.id == VanillaBlockID.wool)
            if(data == 0 || data == 3)
                this.data.wools[2] = item.data;
            else
                this.data.wools[0] = item.data;
        else if(RenderUtil.isClick(pos.x, pos.y, pos.z, wool_2) && item.id == VanillaBlockID.wool)
            this.data.wools[1] = item.data;
        else if(RenderUtil.isClick(pos.x, pos.y, pos.z, wool_3) && item.id == VanillaBlockID.wool)
            if(data == 0 || data == 3)
                this.data.wools[0] = item.data;
            else
                this.data.wools[2] = item.data;
        else
            return false;

        this.init();
        Game.prevent();
        return true;
    }
}

Callback.addCallback("LevelLeft", function(){
    containes_chest = {};
});

Saver.addSavesScope("ender_chest", (obj: any) => {
    containes_chest = obj.containes_chest || {};
}, () => {
    return {
        containes_chest: containes_chest
    };
});

TileEntity.registerPrototype(BlockID.ender_storage, new TileChest(new ClientTileEntity(chest_0, chest_1, chest_2, chest_3)));
StorageInterface.createInterface(BlockID.ender_storage, {
    canReceiveLiquid(liquid, obj){
        return false;
    },
    canTransportLiquid(liquid, obj){
        return false;
    },
    getInputSlots(side: number){
        let slots = [];
        for(let i = 0;i < 3*9;i++)
            slots.push("slot_"+i);
        return slots;
    },
    getOutputSlots(side: number){
        let slots = [];
        for(let i = 0;i < 3*9;i++)
            slots.push("slot_"+i);
        return slots;
    }
}); 

Recipes.addShaped({id: BlockID.ender_storage, count: 1, data: 0}, [
    "aba",
    "cdc",
    "apa"
], ["p", VanillaItemID.ender_pearl, 0, "b", VanillaBlockID.wool, 0, "c", VanillaBlockID.obsidian, 0, "d", VanillaBlockID.chest, 0, "a", VanillaItemID.blaze_rod, 0])