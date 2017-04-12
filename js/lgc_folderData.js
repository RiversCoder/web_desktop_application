var folderData = 
{	
	title : '文件夹目录',
	pid : -1,
	folder :
	[	
		{
			id : 1000,
			pid : 0,
			type : 'folder',
			title : '文件夹',
			icon : './images/folder/Maya.png',
			child : 
			[
				{	
					id : 1001,
					pid : 1,
					type : 'folder',
					title : '我的candy',
					icon : './images/folder/Candy.png',
					child : []
				},
				{	
					id : 1002,
					pid : 1,
					type : 'folder',
					title : '我的CSS',
					icon : './images/folder/CSS-Edit.png',
					child : []
				},
				{	
					id : 1003,
					pid : 1,
					type : 'folder',
					title : '我的Flash',
					icon : './images/folder/Flash.png',
					child : []
				}
			]
		},
		{
			id : 2000,
			pid : 0,
			type : 'folder',
			title : '我的图片',
			icon : './images/folder/Photobooth.png',
			child : 
			[
				{	
					id : 2001,
					pid : 1,
					type : 'img',
					title : 'pic01.jpeg',
					icon : './images/folder/Picture.png',
					src : './images/folder/pic01.jpeg',
					child : []
				},
				{	
					id : 2002,
					pid : 1,
					type : 'img',
					title : 'pic02.jpeg',
					icon : './images/folder/Picture.png',
					src : './images/folder/pic02.jpeg',
					child : []
				},
				{	
					id : 2004,
					pid : 1,
					type : 'img',
					title : 'pic03.jpeg',
					icon : './images/folder/Picture.png',
					src : './images/folder/pic03.jpeg',
					child : []
				}
			]
		},
		{
			id : 3000,
			pid : 0,
			type : 'folder',
			title : '我的音乐',
			icon : './images/folder/Flash.png',
			child : 
			[
				{	
					id : 3001,
					pid : 1,
					type : 'music',
					title : '宇桐非-逆流成河.mp3',
					icon : './images/folder/music.png',
					image : './images/folder/musicPic01.jpeg',
					src : './images/folder/backriver.mp3',
					child : []
				},
				{	
					id : 3002,
					pid : 1,
					type : 'music',
					title : '朴树-白桦林.mp3',
					icon : './images/folder/music.png',
					image : './images/folder/musicPic02.jpeg',
					src : './images/folder/baihualin.mp3',
					child : []
				}
			]
		},
		{
			id : 4000,
			pid : 0,
			type : 'folder',
			title : '我的视频',
			icon : './images/folder/Voice-Candy.png',
			child : 
			[
				{	
					id : 4001,
					pid : 1,
					type : 'video',
					title : '日出日落.mp4',
					icon : './images/folder/video_play.png',
					src : './images/folder/myVideo.mp4',
					child : []
				}
			]
		}
	]
}