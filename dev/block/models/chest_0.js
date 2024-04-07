//create Reider ___ size - 16
function chest_0(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("base", 0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375, obj["base"] ? obj["base"].texture : texture, obj["base"] ? obj["base"].data : data);
	model.addBoxByBlock("wool_1", 0.25, 0.875, 0.375, 0.375, 0.9375, 0.625, obj["wool_1"] ? obj["wool_1"].texture : texture, obj["wool_1"] ? obj["wool_1"].data : data);
	model.addBoxByBlock("wool_2", 0.4375, 0.875, 0.375, 0.5625, 0.9375, 0.625, obj["wool_2"] ? obj["wool_2"].texture : texture, obj["wool_2"] ? obj["wool_2"].data : data);
	model.addBoxByBlock("wool_3", 0.625, 0.875, 0.375, 0.75, 0.9375, 0.625, obj["wool_3"] ? obj["wool_3"].texture : texture, obj["wool_3"] ? obj["wool_3"].data : data);
	model.addBoxByBlock("cube", 0.4375, 0.4375, 0, 0.5625, 0.6875, 0.0625, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	return model;
};//boxes - 5