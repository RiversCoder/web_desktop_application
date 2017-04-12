var lgcJs = `
<script type="text/javascript" src='./js/lgc_DesktopaData.js'></script>
	<script type="text/javascript" src='./js/lgc_tools.js'></script>
	<script type="text/javascript" src='./js/lgc_iconDesktop.js'></script>
	<script type="text/javascript">
		iconDesktop.init();
	</script>
	<script type="text/javascript" src='./js/lgc_folderData.js'></script>
	<script type="text/javascript" src='./js/lgc_folder.js'></script>
	<script type="text/javascript" src='./media/js/media.js'></script>
	<script type="text/javascript">
		Folder.init();
		media.init();
	</script>
	<script type="text/javascript" src='./js/lgc_mark.js'></script>
	<script type="text/javascript">
		mark.init();
	</script>
	<script type="text/javascript" src='./js/lgc_myBottomBox.js'></script>

	<script type="text/javascript" src='./js/lgc_pb_right.js'></script>
	<script type="text/javascript" src='./js/lgc_about.js'></script>
`;

var arrLgcJs = 
[
	{
		src : './js/lgc_DesktopaData.js',
		content : '',
	},
	{
		src : './js/lgc_tools.js',
		content : ''
	},
	{
		src : './js/lgc_iconDesktop.js',
		content : ''
	},
	{
		src : '',
		content : 'iconDesktop.init();'
	},
	{
		src : './js/lgc_folderData.js',
		content : ''
	},
	{
		src : './js/lgc_folder.js',
		content : ''
	},
	{
		src : './media/js/media.js',
		content : ''
	},
	{
		src : '',
		content : 'Folder.init();media.init();'
	},
	{
		src : './js/lgc_mark.js',
		content : ''
	},
	{
		src : '',
		content : 'mark.init();'
	},
	{
		src : './js/lgc_myBottomBox.js',
		content : ''
	},
	{
		src : './js/lgc_pb_right.js',
		content : ''
	},
	{
		src : './js/lgc_about.js',
		content : ''
	}
];