<template>
	<div style="background-color: white;">
		<img src="../assets/home/header.png" class="home-header-background">
		<div style="text-align: center; margin-top: 10vw;">
			<v-img src="../assets/home/car.png" width="27vw" style="display: inline-block;"></v-img>
			<!-- <img src="../assets/home/car.png" style="width: 27vw; height: auto;"> -->
			<div style="display: inline-block; margin-left: 30px; font-weight:900; margin-top: 10px;">
				<div style="font-size: 4vw;">“莫愁前路无知己，<br>BeenThere Buddy <br>在等你”</div>
				<div style="font-size: 1.7vw; margin-top: 3vw; ">免费、匿名、即时的线上文字聊天陪伴</div>
			</div>
			<div style="margin-top: 5vw; font-weight: bold; font-size: 1.3vw;">
				<div style="margin-top: 2vw; ">或许你来到新的环境，感到孤单难以适应</div>
				<div style="margin-top: 1.2vw; ">或许你很想变得优秀，实现自己心中目标</div>
				<div style="margin-top: 1.2vw; ">或许你面对压力焦虑，希望有人分担帮助</div>
				<div style="margin-top: 1.2vw; ">或许你正在经历苦恼，需要有人安慰倾听</div>
			</div>
			<div style="margin-top: 3vw;">
				<div><a href="https://tawk.to/chat/5d0cf96336eab972111899f7/default?%24_tawk_sk=5dab16685380b6a7d21de80c&%24_tawk_tk=6a8b31237ab901f2a3e662e9a86cc743&v=679" class="home-tawk-to">我们聊聊吧!</a></div>
				<div style="margin-top: 2vw;;"><a href="https://shimo.im/sheets/XDhvpJ8QQKh6XvHq/xUGGo" class="home-shimo-link">查看值班表，好buddy不会丢！</a></div>
			</div>
			<v-divider class="home-divider"></v-divider>
			
		</div>
	</div>
</template>

<script>
	export default {
		name : "HomeContent"
	}
</script>

<style>
	.home-header-background{
		width: 100%;
		height: 40%;
		/* position: relative; */
		filter: brightness(80%);
	}
	.home-shimo-link{
		color: #ffce8f;
		font-size: 1.5vw;
		font-weight: bold;
		
	}
	.home-tawk-to{
		font-size: 1.6vw; 
		padding: 1vw; 
		border: 2px solid #ffce8f; 
		border-radius: 25px; 
		color: #FFB74D;
	}
	.home-divider{
		margin-top: 10px; 
		width: 80vw; 
		margin-left: 10vw;
	}
</style>
