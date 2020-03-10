<template>
	<div class="footer-block">
		<div style="font-size: 2vw;">
			<p style="margin-top: 2vw;font-size: 5vw; text-align: center;">关注我们</p>
			<p style="margin-top: 3vw;">我们不是心理医生，但是为你整理了国内外的专业免费 <a href="https://beentherebuddy.com/urgsituation">[心理支持服务热线]</a>，希望能够帮到你</p>
			<img src="../assets/qrcode.jpg" class="footer-qrcode" style="margin-top: 2vw;">
			<!-- Here the b should serve as a stronger decoration, but it seems unseless -->
			<p style="margin-top: 2vw;">微信公众号：<b>BeenThere2018</b></p>
			<p style="margin-top: 1vw;">邮箱：<b>been_there_team@outlook.com</b></p>
			<p style="margin-top: 5vw;">Powered by Mengyang Liu</p>
		</div>
	</div>
</template>

<script>

export default {
    name: "Footer"
}
</script>

<style>
.footer-block{
    background-color: #FFB74D;
    width: 100%;
    height: 65%;
	font-weight: 700;
	text-align: center;
}
.footer-qrcode{
	width:15%;
	height:15%;
	background-color: white;
}
a{
	text-decoration:none;
	color: #000000;
}
</style>