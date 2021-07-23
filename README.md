# AR.js

#### 介绍
AR相机，可扫描照片并在其上显示3D模型，并且3D模型可随着被识别的目标的移动而一起移动。


#### 相关文档
1.  AR.js官方文档：https://ar-js-org.github.io/AR.js-Docs/image-tracking/
2.  中文翻译版文档：https://ar.cnxfs.com.cn/
3.  3D模型下载网站：https://sketchfab.com/


#### 注意事项
1.  可以使用IIS或Apache这类的web服务器，请使用HTTPS协议，http会无法使用WEB相机。
2.  只要修改“图像描述符”的路径和3D模型的路径即可，注意相对路径的规范及扩展名
3.  只要有浏览器就能用本AR相机，浏览器支援WEBRTC就行，因此可以利用WebView嵌入到android APP中。
4.  可以访问https://ar.cnxfs.com.cn/girl.htm 等页面来体验AR本相机，目前可体验的页面有dragon.htm、girl.htm、mycar.htm、smoking_boy.htm和water_house.htm。对应的识别图片放在testAR\descriptors目录下，可以打开相应的jpg文件用手机进行扫描。
5.  NFT-Marker-Creator文件夹下的是“图像描述符”训练工具，也用WEB版https://carnaux.github.io/NFT-Marker-Creator/
