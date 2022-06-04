class EnderTileBase extends TileEntityBase {
    useNetworkItemContainer = true;
    tick(): void {
        StorageInterface.checkHoppers(this);
        this.container.sendChanges();
    }
    getScreenName(player: number, coords: Callback.ItemUseCoordinates): string {
        return "main";
    }

    private static containes_chest: {[key: string]: ItemContainer} = {};

    static getContainerChest(wools: number[]): ItemContainer {
        let key = wools[0]+"."+wools[1]+"."+wools[2];
        if(this.containes_chest[key] === undefined)
            this.containes_chest[key] = new ItemContainer();
        return this.containes_chest[key];
    }
};