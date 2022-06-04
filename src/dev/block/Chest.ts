/// <reference path="./TileBase.ts"/>
/// <reference path="./models/chest_0.js"/>
/// <reference path="./models/chest_1.js"/>
/// <reference path="./models/chest_2.js"/>
/// <reference path="./models/chest_3.js"/>

IDRegistry.genBlockID("ender_storage_");
Block.createBlockWithRotation("ender_storage_", [{
    name: "Ender Storage",
    texture: [["stone", 0]],
    inCreative: true
}]);
Translation.addTranslation("Ender Storage", {
    ru: "Эндер сундук"
});

chest_1(null, BlockID.ender_storage_, 0).setBlockModel(BlockID.ender_storage_, 0);
chest_0(null, BlockID.ender_storage_, 1).setBlockModel(BlockID.ender_storage_, 1);
chest_3(null, BlockID.ender_storage_, 2).setBlockModel(BlockID.ender_storage_, 2);
chest_2(null, BlockID.ender_storage_, 3).setBlockModel(BlockID.ender_storage_, 3);

let ChestUI = new UI.StandardWindow({
    standard:{
        "header": {
            "text": {
                "text": Translation.translate("Ender Storage")
            }
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

class TileChest extends EnderTileBase {
    defaultValues = {
        wools: [0, 0, 0]
    }
    networkEntityType: any;

    init(): void {
        this.container = EnderTileBase.getContainerChest(this.data.wools);
        this.container.setParent(this);
        this.container.setClientContainerTypeName(this.networkEntityType.getTypeName());
    }

    getScreenByName(screenName: string): UI.IWindow {
        return ChestUI;
    }

    tick(): void {
        super.tick();
    }
}

TileEntity.registerPrototype(BlockID.ender_storage_, new TileChest());
StorageInterface.createInterface(BlockID.ender_storage_, {
    canReceiveLiquid(liquid, obj){
        return false;
    },
    canTransportLiquid(liquid, obj){
        return false;
    },
    "slots": {
        "slot^0-36": {input: true, output:true}
    }
});