IMPORT("BlockEngine");
IMPORT("StorageInterface");
IMPORT("RenderUtil");
IMPORT("VanillaSlots");
//create Reider ___ size - 16
function chest_0(obj, texture_default, data_default) {
    obj = obj || {};
    var texture = texture_default || 1, data = data_default || 0;
    var model = new RenderUtil.Model();
    model.addBoxByBlock("base", 0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375, obj["base"] ? obj["base"].texture : texture, obj["base"] ? obj["base"].data : data);
    model.addBoxByBlock("wool_1", 0.25, 0.875, 0.375, 0.375, 0.9375, 0.625, obj["wool_1"] ? obj["wool_1"].texture : texture, obj["wool_1"] ? obj["wool_1"].data : data);
    model.addBoxByBlock("wool_2", 0.4375, 0.875, 0.375, 0.5625, 0.9375, 0.625, obj["wool_2"] ? obj["wool_2"].texture : texture, obj["wool_2"] ? obj["wool_2"].data : data);
    model.addBoxByBlock("wool_3", 0.625, 0.875, 0.375, 0.75, 0.9375, 0.625, obj["wool_3"] ? obj["wool_3"].texture : texture, obj["wool_3"] ? obj["wool_3"].data : data);
    model.addBoxByBlock("cube", 0.4375, 0.4375, 0, 0.5625, 0.6875, 0.0625, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
    return model;
}
; //boxes - 5
//create Reider ___ size - 16
function chest_1(obj, texture_default, data_default) {
    obj = obj || {};
    var texture = texture_default || 1, data = data_default || 0;
    var model = new RenderUtil.Model();
    model.addBoxByBlock("base", 0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375, obj["base"] ? obj["base"].texture : texture, obj["base"] ? obj["base"].data : data);
    model.addBoxByBlock("wool_1", 0.25, 0.875, 0.375, 0.375, 0.9375, 0.625, obj["wool_1"] ? obj["wool_1"].texture : texture, obj["wool_1"] ? obj["wool_1"].data : data);
    model.addBoxByBlock("wool_2", 0.4375, 0.875, 0.375, 0.5625, 0.9375, 0.625, obj["wool_2"] ? obj["wool_2"].texture : texture, obj["wool_2"] ? obj["wool_2"].data : data);
    model.addBoxByBlock("wool_3", 0.625, 0.875, 0.375, 0.75, 0.9375, 0.625, obj["wool_3"] ? obj["wool_3"].texture : texture, obj["wool_3"] ? obj["wool_3"].data : data);
    model.addBoxByBlock("cube", 0.4375, 0.4375, 0.9375, 0.5625, 0.6875, 1, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
    return model;
}
; //boxes - 5
//create Reider ___ size - 16
function chest_2(obj, texture_default, data_default) {
    obj = obj || {};
    var texture = texture_default || 1, data = data_default || 0;
    var model = new RenderUtil.Model();
    model.addBoxByBlock("base", 0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375, obj["base"] ? obj["base"].texture : texture, obj["base"] ? obj["base"].data : data);
    model.addBoxByBlock("wool_1", 0.375, 0.875, 0.25, 0.625, 0.9375, 0.375, obj["wool_1"] ? obj["wool_1"].texture : texture, obj["wool_1"] ? obj["wool_1"].data : data);
    model.addBoxByBlock("wool_2", 0.375, 0.875, 0.4375, 0.625, 0.9375, 0.5625, obj["wool_2"] ? obj["wool_2"].texture : texture, obj["wool_2"] ? obj["wool_2"].data : data);
    model.addBoxByBlock("wool_3", 0.375, 0.875, 0.625, 0.625, 0.9375, 0.75, obj["wool_3"] ? obj["wool_3"].texture : texture, obj["wool_3"] ? obj["wool_3"].data : data);
    model.addBoxByBlock("cube", 0, 0.4375, 0.4375, 0.0625, 0.6875, 0.5625, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
    return model;
}
; //boxes - 5
//create Reider ___ size - 16
function chest_3(obj, texture_default, data_default) {
    obj = obj || {};
    var texture = texture_default || 1, data = data_default || 0;
    var model = new RenderUtil.Model();
    model.addBoxByBlock("base", 0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375, obj["base"] ? obj["base"].texture : texture, obj["base"] ? obj["base"].data : data);
    model.addBoxByBlock("wool_1", 0.375, 0.875, 0.25, 0.625, 0.9375, 0.375, obj["wool_1"] ? obj["wool_1"].texture : texture, obj["wool_1"] ? obj["wool_1"].data : data);
    model.addBoxByBlock("wool_2", 0.375, 0.875, 0.4375, 0.625, 0.9375, 0.5625, obj["wool_2"] ? obj["wool_2"].texture : texture, obj["wool_2"] ? obj["wool_2"].data : data);
    model.addBoxByBlock("wool_3", 0.375, 0.875, 0.625, 0.625, 0.9375, 0.75, obj["wool_3"] ? obj["wool_3"].texture : texture, obj["wool_3"] ? obj["wool_3"].data : data);
    model.addBoxByBlock("cube", 0.9375, 0.4375, 0.4375, 1, 0.6875, 0.5625, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
    return model;
}
; //boxes - 5
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EnderTileBase = /** @class */ (function (_super) {
    __extends(EnderTileBase, _super);
    function EnderTileBase(client) {
        var _this = _super.call(this) || this;
        _this.useNetworkItemContainer = true;
        _this.defaultValues = {
            wools: null
        };
        _this.client = client;
        return _this;
    }
    EnderTileBase.prototype.getContainer = function () {
        return null;
    };
    EnderTileBase.prototype.updateModel = function () {
        if (!this.data.wools)
            this.data.wools = [0, 0, 0];
        if (this.cacheData === undefined)
            this.cacheData = this.blockSource.getBlockData(this.x, this.y, this.z);
        this.networkData.putInt("id", this.blockID);
        this.networkData.putInt("data", this.cacheData);
        this.networkData.putInt("1", this.data.wools[0] || 0);
        this.networkData.putInt("2", this.data.wools[1] || 0);
        this.networkData.putInt("3", this.data.wools[2] || 0);
        this.networkData.sendChanges();
    };
    EnderTileBase.prototype.tick = function () {
        StorageInterface.checkHoppers(this);
        this.container.sendChanges();
    };
    EnderTileBase.prototype.init = function () {
        if (!this.data.wools)
            this.data.wools = [0, 0, 0];
        this.container = this.getContainer();
        this.container.setClientContainerTypeName(this.networkEntityType.getTypeName());
        VanillaSlots.registerServerEventsForContainer(this.container);
        this.updateModel();
    };
    EnderTileBase.prototype.getScreenName = function (player, coords) {
        return "main";
    };
    EnderTileBase.prototype.destroy = function () {
        this.container = new ItemContainer();
        return _super.prototype.destroy.call(this);
    };
    return EnderTileBase;
}(TileEntityBase));
;
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
var DEFAULT_boxes = { "wool_1": { texture: VanillaBlockID.wool, data: 0 }, "wool_2": { texture: VanillaBlockID.wool, data: 0 }, "wool_3": { texture: VanillaBlockID.wool, data: 0 } };
var INSTANCE_chest_0 = chest_0(DEFAULT_boxes, BlockID.ender_storage, 1);
var INSTANCE_chest_1 = chest_1(DEFAULT_boxes, BlockID.ender_storage, 0);
var INSTANCE_chest_2 = chest_2(DEFAULT_boxes, BlockID.ender_storage, 3);
var INSTANCE_chest_3 = chest_3(DEFAULT_boxes, BlockID.ender_storage, 2);
BlockRenderer.setCustomCollisionAndRaycastShape(BlockID.ender_storage, 0, INSTANCE_chest_1.getCollisionShape());
BlockRenderer.setCustomCollisionAndRaycastShape(BlockID.ender_storage, 1, INSTANCE_chest_0.getCollisionShape());
BlockRenderer.setCustomCollisionAndRaycastShape(BlockID.ender_storage, 2, INSTANCE_chest_3.getCollisionShape());
BlockRenderer.setCustomCollisionAndRaycastShape(BlockID.ender_storage, 3, INSTANCE_chest_2.getCollisionShape());
BlockRenderer.enableCoordMapping(BlockID.ender_storage, 0, INSTANCE_chest_1.getICRenderModel());
BlockRenderer.enableCoordMapping(BlockID.ender_storage, 1, INSTANCE_chest_0.getICRenderModel());
BlockRenderer.enableCoordMapping(BlockID.ender_storage, 2, INSTANCE_chest_3.getICRenderModel());
BlockRenderer.enableCoordMapping(BlockID.ender_storage, 3, INSTANCE_chest_2.getICRenderModel());
var ChestUI = new UI.StandardWindow({
    standard: {
        "header": {
            "text": {
                "text": Translation.translate("Ender Storage")
            }
        },
        "background": {
            "standard": true,
        },
        "inventory": {
            "standard": true
        }
    },
    elements: {}
});
(function (x, y, size) {
    var content = ChestUI.getContent();
    var c = 0;
    for (var i = 0; i < 9; i++)
        for (var j = 0; j < 3; j++) {
            content.elements["slot_" + c] = { "type": "slot", x: x + (size * i), y: y + (size * j), size: size };
            c++;
        }
})(10, 10, 110);
VanillaSlots.registerForWindow(ChestUI);
var containes_chest = {};
var ClientTileEntity = /** @class */ (function () {
    function ClientTileEntity(model_0, model_1, model_2, model_3) {
        this.model_0 = model_0;
        this.model_1 = model_1;
        this.model_2 = model_2;
        this.model_3 = model_3;
    }
    ClientTileEntity.prototype.updateModel = function () {
        var id = Network.serverToLocalId(this.networkData.getInt("id"));
        var data = this.networkData.getInt("data");
        var wool_1 = this.networkData.getInt("1");
        var wool_2 = this.networkData.getInt("2");
        var wool_3 = this.networkData.getInt("3");
        switch (data) {
            case 0:
                BlockRenderer.mapAtCoords(this.x, this.y, this.z, this.model_1({
                    "wool_3": { texture: VanillaBlockID.wool, data: wool_1 },
                    "wool_2": { texture: VanillaBlockID.wool, data: wool_2 },
                    "wool_1": { texture: VanillaBlockID.wool, data: wool_3 }
                }, id, data).getICRenderModel());
                break;
            case 1:
                BlockRenderer.mapAtCoords(this.x, this.y, this.z, this.model_0({
                    "wool_1": { texture: VanillaBlockID.wool, data: wool_1 },
                    "wool_2": { texture: VanillaBlockID.wool, data: wool_2 },
                    "wool_3": { texture: VanillaBlockID.wool, data: wool_3 }
                }, id, data).getICRenderModel());
                break;
            case 2:
                BlockRenderer.mapAtCoords(this.x, this.y, this.z, this.model_3({
                    "wool_1": { texture: VanillaBlockID.wool, data: wool_1 },
                    "wool_2": { texture: VanillaBlockID.wool, data: wool_2 },
                    "wool_3": { texture: VanillaBlockID.wool, data: wool_3 }
                }, id, data).getICRenderModel());
                break;
            case 3:
                BlockRenderer.mapAtCoords(this.x, this.y, this.z, this.model_2({
                    "wool_3": { texture: VanillaBlockID.wool, data: wool_1 },
                    "wool_2": { texture: VanillaBlockID.wool, data: wool_2 },
                    "wool_1": { texture: VanillaBlockID.wool, data: wool_3 }
                }, id, data).getICRenderModel());
                break;
        }
    };
    ClientTileEntity.prototype.load = function () {
        this.updateModel();
        var self = this;
        this.networkData.addOnDataChangedListener(function (data, key) {
            self.updateModel();
        });
    };
    ClientTileEntity.prototype.unload = function () {
        BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
    };
    return ClientTileEntity;
}());
var TileChest = /** @class */ (function (_super) {
    __extends(TileChest, _super);
    function TileChest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileChest.prototype.getContainer = function () {
        var key = this.data.wools[0] + "." + this.data.wools[1] + "." + this.data.wools[2];
        if (!containes_chest[key])
            return containes_chest[key] = new ItemContainer();
        return containes_chest[key];
    };
    TileChest.prototype.getScreenByName = function (screenName) {
        return ChestUI;
    };
    TileChest.prototype.onItemUse = function (coords, item, player) {
        var model = INSTANCE_chest_0;
        var data = this.blockSource.getBlockData(this.x, this.y, this.z);
        if (this.blockSource.getBlockData(this.x, this.y, this.z) > 1)
            model = INSTANCE_chest_2;
        var wool_1 = model.getBoxes()["wool_1"];
        var wool_2 = model.getBoxes()["wool_2"];
        var wool_3 = model.getBoxes()["wool_3"];
        var pos = { x: coords.vec.x - coords.x, y: coords.vec.y - coords.y, z: coords.vec.z - coords.z };
        if (RenderUtil.isClick(pos.x, pos.y, pos.z, wool_1) && item.id == VanillaBlockID.wool)
            if (data == 0 || data == 3)
                this.data.wools[2] = item.data;
            else
                this.data.wools[0] = item.data;
        else if (RenderUtil.isClick(pos.x, pos.y, pos.z, wool_2) && item.id == VanillaBlockID.wool)
            this.data.wools[1] = item.data;
        else if (RenderUtil.isClick(pos.x, pos.y, pos.z, wool_3) && item.id == VanillaBlockID.wool)
            if (data == 0 || data == 3)
                this.data.wools[0] = item.data;
            else
                this.data.wools[2] = item.data;
        else
            return false;
        this.init();
        Game.prevent();
        return true;
    };
    return TileChest;
}(EnderTileBase));
Callback.addCallback("LevelLeft", function () {
    containes_chest = {};
});
Saver.addSavesScope("ender_chest", function (obj) {
    containes_chest = obj.containes_chest || {};
}, function () {
    return {
        containes_chest: containes_chest
    };
});
TileEntity.registerPrototype(BlockID.ender_storage, new TileChest(new ClientTileEntity(chest_0, chest_1, chest_2, chest_3)));
StorageInterface.createInterface(BlockID.ender_storage, {
    canReceiveLiquid: function (liquid, obj) {
        return false;
    },
    canTransportLiquid: function (liquid, obj) {
        return false;
    },
    getInputSlots: function (side) {
        var slots = [];
        for (var i = 0; i < 3 * 9; i++)
            slots.push("slot_" + i);
        return slots;
    },
    getOutputSlots: function (side) {
        var slots = [];
        for (var i = 0; i < 3 * 9; i++)
            slots.push("slot_" + i);
        return slots;
    }
});
Recipes.addShaped({ id: BlockID.ender_storage, count: 1, data: 0 }, [
    "aba",
    "cdc",
    "apa"
], ["p", VanillaItemID.ender_pearl, 0, "b", VanillaBlockID.wool, 0, "c", VanillaBlockID.obsidian, 0, "d", VanillaBlockID.chest, 0, "a", VanillaItemID.blaze_rod, 0]);
