chrome.contextMenus.create({
    title : 'DRMaker',
    type : 'normal',
    contexts : ['all'],
    id: 'parent_id',
    onclick : () => alert('hello')
});