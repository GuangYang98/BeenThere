<template>
	<div class="footer-block">
		<div style="font-size: 1.3vw;">
			<p style="font-size: 3.5vw; text-align: center;">关注我们</p>
			<p style="margin-top: 3vw;">我们不是心理医生，但是为你整理了国内外的专业免费 <a href="https://beentherebuddy.com/urgsituation" style="text-decoration: underline;">[心理支持服务热线]</a>，希望能够帮到你</p>
			<img src="../assets/qrcode.jpg" class="footer-qrcode" style="margin-top: 2vw;">
			<!-- Here the b should serve as a stronger decoration, but it seems unseless -->
			<p style="margin-top: 2vw;">微信公众号：<b>BeenThere2018</b></p>
			<p style="margin-top: 1vw;">邮箱：<b>been_there_team@outlook.com</b></p>
			<p style="margin-top: 4vw;">Designed by Zijing Wang & Yutong Jiang</p>
			<p style="margin-top: 1vw;">Powered by Mengyang Liu & Guang Yang</p>
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
    font-family: Roboto;
	text-align: center;
	font-weight: bold;
	padding-bottom: 2vw;
}
.footer-qrcode{
	width:15%;
	height:15%;
	background-color: white;
}
a{
	color: #000000;
}
</style>