class EnderTileBase extends TileEntityBase {
    public useNetworkItemContainer = true;
    public client: any;
    public networkEntityType: any;
    public defaultValues = {
        wools:null
    };

    public data: this["defaultValues"];

    constructor(client: any){
        super();
        this.client = client;
    }

    public getContainer(): ItemContainer {
        return null;
    }

    public cacheData: number;

    public updateModel(): void {
        if(!this.data.wools)
            this.data.wools = [0, 0, 0];

        if(this.cacheData === undefined)
            this.cacheData = this.blockSource.getBlockData(this.x, this.y, this.z);

        this.networkData.putInt("id", this.blockID);
        this.networkData.putInt("data", this.cacheData);
        this.networkData.putInt("1", this.data.wools[0] || 0);
        this.networkData.putInt("2", this.data.wools[1] || 0);
        this.networkData.putInt("3", this.data.wools[2] || 0);
        
        this.networkData.sendChanges();
    }

    public tick(): void {
        StorageInterface.checkHoppers(this);
        this.container.sendChanges();
    }

    public init(): void {
        if(!this.data.wools)
            this.data.wools = [0, 0, 0];

        this.container = this.getContainer();
        this.container.setClientContainerTypeName(this.networkEntityType.getTypeName());
        VanillaSlots.registerServerEventsForContainer(this.container);
        this.updateModel();
    }

    public getScreenName(player: number, coords: Callback.ItemUseCoordinates): string {
        alert("getScreenName "+this.container.getClientContainerTypeName())
        return "main";
    }

    public destroy(): boolean {
        this.container = new ItemContainer();
        return super.destroy();
    }
};