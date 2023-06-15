jwplayer("jwplayerDiv1").setup({
  width: "100%",
      aspectratio: "16:9",
      autostart: true,
    //playlist: [{
        file: "https://unifi-live01.secureswiftcontent.com/UnifiHD/live03_1080FHD.mpd",
		//type: "dash",
	    drm: {
	        clearkey: {
	          key: '27a2f71d87bf5eb105af096fb6605d97',
	          keyId: '3afe30ee4ea24a67fe5a2ef06e83db0b'
	        }
	      }
   // }]
});
