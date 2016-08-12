const folders = [
	['items', 'folders'],
	(folders) => {	return folders.toJS();	}
];

const value = [
	['searching'],
	(searching) => {return searching.get('value')}
];

const data = [
	['items', 'folders'],
	['searching', 'value'],

	function filter(folders, value) {
		let dontNeed = [], filteredList = [], list = folders.toJS();

		list.forEach(function (item) {
			if (item.type === 'folder' && item.name.indexOf(value) > -1 && item.expanded === false) {
				filteredList.push(item);
			} else    {
				if (item.type === 'folder' && item.name.indexOf(value) > -1 && item.expanded === true){
					filteredList.push(item);
					return filteredList;
				} else  {
					if (item.type === 'folder' && item.expanded === true) {
						dontNeed = filter(item.children, value);
						dontNeed.forEach(function (something){
							filteredList.push(something);
						});
					} else  {
						if (item.type === 'file' && item.name.indexOf(value) > -1)
							filteredList.push(item);
					}
				}
			}
		});

		return {
			value: value,
			directories: filteredList
		}
	}
];

export default {folders, value, data};