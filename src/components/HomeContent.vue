<template>
	<div class="home-content-wrapper" id="home-wrapper" style="font-size: 1.7vw;">
		<div v-if="getWidth() > 700" class="home-header-background-desktop">
			<div class="home-title" id="home-title">
				<p style="font-size: 5vw;">BeenThere</p>
				<p>全球青年心灵互助社区</p>
			</div>
		</div>
		<div v-else class="home-header-background-mobile">
			<div class="home-title" style="padding-top: 25vw; padding-bottom: 20vw;">
				<p style="font-size: 5vw;">BeenThere</p>
				<p>全球青年心灵互助社区</p>
			</div>
		</div>
		
		<div class="home-content-without-title">
			<v-img src="../assets/home/car.png" width="27vw" style="display: inline-block;" eager></v-img>
			<div style="display: inline-block; margin-left: 2vw; margin-top: 1vw;">
				<div style="font-size: 4vw;">“莫愁前路无知己，<br>BeenThere Buddy <br>在等你”</div>
				<div style="margin-top: 3vw; ">免费、匿名、即时的线上文字聊天陪伴</div>
			</div>
			<div style="margin-top: 4vw;">
				<div style="margin-top: 2vw;">或许你来到新的环境，感到孤单难以适应</div>
				<div style="margin-top: 1.2vw; ">或许你很想变得优秀，实现自己心中目标</div>
				<div style="margin-top: 1.2vw; ">或许你面对压力焦虑，希望有人分担帮助</div>
				<div style="margin-top: 1.2vw; ">或许你正在经历苦恼，需要有人安慰倾听</div>
			</div>
			<div style="margin-top: 3vw;">
				<div><a href="https://tawk.to/chat/5d0cf96336eab972111899f7/default" class="home-tawk-to">我们聊聊吧!</a></div>
				<div style="margin-top: 2vw;"><a href="https://shimo.im/sheets/XDhvpJ8QQKh6XvHq/xUGGo" class="home-shimo-link">点击查看值班表，好buddy不会丢！</a></div>
			</div>
			<v-divider class="home-divider"></v-divider>
			<div class="home-introduce">
				<p>BeenThere</p>
				<p style="margin-top: 1vw;">是一个源自哈佛中国学生的全球青年心灵互助社区</p>
				<p style="margin-top: 1vw;">我们来自各地，有着不同的经历</p>
				<p style="margin-top: 1vw;">我们愿意倾听，愿意分享</p>
				<p style="margin-top: 3vw;">为你提供最私密、最暖心的倾听陪伴</p>
				<p style="margin-top: 1vw;">足不出户就能得到即时的心理支持</p>
				<p style="margin-top: 3vw;">无需缴费！无需注册！无需预约！</p>
				<p style="margin-top: 1vw;">不限时长！不限次数！匿名倾诉！</p>
				<p style="margin-top: 3vw;">一个视频快速了解我们：</p>
				<iframe src="https://player.bilibili.com/player.html?aid=98269056&cid=167750424&page=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 71.48vw; height: 40vw; margin-top: 2vw;"> </iframe>
				<!-- <iframe src="//player.bilibili.com/player.html?aid=97966740&cid=167232948&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe> -->
				
			</div>
			
			<div style="margin-top: 3vw;">
				<div><a href="https://tawk.to/chat/5d0cf96336eab972111899f7/default" class="home-tawk-to">我们聊聊吧!</a></div>
				<div style="margin-top: 2vw;"><a href="https://shimo.im/sheets/XDhvpJ8QQKh6XvHq/xUGGo" class="home-shimo-link">点击查看值班表，好buddy不会丢！</a></div>
				<div class="home-history" style="font-style:italic;">
					<p>BeenThere 是一个由志愿者组成的互助倾听组织，不提供专业的医疗服务，如有需要，建议您接受相关专业服务，或是拨打网站上免费专业的<a href="https://beentherebuddy.com/urgsituation" style="text-decoration: underline;">[心理支持服务热线]</a>。我们在意您的安全和健康，很希望帮到您! </p>
				</div>
			</div>
			<img src="../assets/home/yellow.png" style="width: 100vw; height: auto; padding-top: 3vw;">
			
			<div style="text-align: center; margin-top: 3vw;">
				<p style="color: #fc6; font-size: 4vw;">来访者感悟</p>
				<div style="font-family: Roboto;">
					<p class="home-quotation">“</p>
					<p class="home-comment">BeenThere 真正做到了帮助来访者 “实现自身潜力”，Daniel 也做到了和来访者一起 “寻找方向，成</p>
					<p class="home-comment">为更好的人”。</p>
					<p class="home-comment-author">— Iva</p>
					<p class="home-quotation">“</p>
					<p class="home-comment">那种和一个尊重，理解你，同时愿意尽力帮助和支持你的人交谈的感觉，真的很棒！</p>
					<p class="home-comment-author">— 卓一</p>
					<p class="home-quotation">“</p>
					<p class="home-comment">她总是设身处地的为我着想，这段漫长的失恋期是她告诉我不要埋怨自己，要selfcare，听我慢慢</p>
					<p class="home-comment">的讲述自己变化和改善，让我感受到一个来自陌生人的善意和世界的谅解。</p>
					<p class="home-comment-author">— Winter</p>
				</div>
				
			</div>
			<img src="../assets/home/pink.png" style="width: 100vw; height: auto; padding-top: 3vw; padding-bottom: 3vw;">
			<div class="home-sponsor">
				<p class="home-sponsor-title">赞助团体 | Credentials</p>
				<div style="margin-top: 3vw;">
					<div class="home-sponsor-block">
						<img src="../assets/home/mitSandbox.png" class="home-sponsor-image">
						<p>MIT Sandbox 基金赞助项目</p>
					</div>
					<div class="home-sponsor-block">
						<img src="../assets/home/Legatum.jpeg" class="home-sponsor-image">
						<p>MIT 社会创新发展中心赞助项目</p>
					</div>
					<div class="home-sponsor-block">
						<img src="../assets/home/MITCHIEF.png" class="home-sponsor-image">
						<p>MIT 中国创新与创业论坛成员团队</p>
					</div>
				</div>
				<div style="margin-top: 4vw;">
					<div class="home-sponsor-block">
						<img src="../assets/home/iLabs2.jpg" class="home-sponsor-image">
						<p>哈佛创新实验室特别孵化项目</p>
					</div>
					<div class="home-sponsor-block">
						<img src="../assets/home/Tsinghua.jpeg" class="home-sponsor-image">
						<p>清华校友三创大赛全球总决赛优胜奖</p>
					</div>
				</div>
			</div>
			<div class="home-history">
				<p>BeenThere自推出 “Buddy服务” 以来，所接咨询案例超过1000个，给87%接受我们服务的来访者带来了提升，99%的来访者对Buddy 服务表示满意；我们也入选了哈佛、MIT一线的孵化器，大家族成员已超过100人。目前我们已有50余位Online Buddy，TA们是来自世界各地名校的活跃志愿者，位于美国、中国、加拿大、澳大利亚、日本、英国等国家，TA们的背景涵盖哈佛、麻省理工、斯坦福、牛津、剑桥、宾大、哥大、伯克利、清华、北大、复旦等海内外名校。</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name : "HomeContent",
		methods:{
			getWidth(){
				return document.documentElement.clientWidth;
			}
		}
	}
</script>

<style>
	.home-sponsor{
		text-align: center;
		font-weight: bold;
		font-family: Roboto;
	}
	.home-introduce{
		text-align: center; 
		margin-top: 3vw; 
		font-weight: bold;
	}
	.home-sponsor-title{
		color: #e07171; 
		font-size: 4vw; 
		margin-top: 3vw;
	}
	.home-history{
		padding-left: 5vw;
		width: 90vw;
		margin-top: 4vw; 
		font-weight: bold; 
		padding-bottom: 4vw;
		height: auto;  
		word-wrap:break-word;  
		word-break:break-all;
	}
	.home-content-without-title{
		text-align: center;
		padding-top: 6vw; 
		font-family: Roboto; 
		font-weight: bold;
	}
	.home-title{
		font-family: Roboto; 
		color: white; 
		font-size: 2.5vw;
		padding-top: 20vw; 
		padding-bottom: 15vw;
	}
	.home-content-wrapper{
		background-color: white; 
		font-family: Roboto;
	}
	.home-header-background-desktop{
		/* position: relative; */
		background-size: contain;
		text-align: center;
		background-image: url(../assets/home/mask_header.jpg);
	}
	.home-header-background-mobile{
		/* position: relative; */
		background-size: contain;
		text-align: center;
		background-image: url(../assets/home/cutHeader.png);
	}
	.home-shimo-link{
		color: #ffce8f;	
	}
	.home-shimo-link:hover{
		color: coral;
	}
	.home-tawk-to{
		padding-left: 2vw;
		padding-right: 2vw;
		padding-top: 1.5vw;
		padding-bottom: 1.5vw;
		border: 2px solid #ffce8f; 
		-webkit-transition-property:background-color;
		-webkit-transition-duration:0.5s;
		-webkit-transition-timing-function: ease;
		border-radius: 25px; 
		background-color: #ffce8f;
		color: white;
		text-decoration: none;
	}
	.home-tawk-to:hover {
		background-color: #ffce8f;
	}
	.home-divider{
		margin-top: 3vw; 
		width: 80vw; 
		margin-left: 10vw;
	}
	.home-quotation{
		color: gray; 
		font-size: 5vw;
		margin-top: 2vw;
	}
	.home-comment{
	}
	.home-comment-author{
		color: gray;
		margin-top: 2vw;
	}
	.home-sponsor-image{
		height: 8vw;
		width: auto;
	}
	.home-sponsor-block{
		margin-left: 2vw;
		display: inline-block;
	}
	
	@-webkit-keyframes blur {
		0% {
			-webkit-filter: blur(10px); /* Chrome, Opera */
			-moz-filter: blur(10px);
			-ms-filter: blur(10px);
			filter: blur(10px);
		}
		50% {
			-webkit-filter: blur(5px);
			-moz-filter: blur(5px);
			-ms-filter: blur(5px);
			filter: blur(5px);
		}
		100% {
			-webkit-filter: blur(0px); 
			-moz-filter: blur(0px);
			-ms-filter: blur(0px);
			filter: blur(0px);
		}
	}
	img{-webkit-animation-name: blur; /*动画名称*/
	-webkit-animation-duration: 1s; /*动画持续时间*/
	-webkit-animation-iteration-count: 1; /*动画次数*/
	-webkit-animation-delay: 0s; /*延迟时间*/}
</style>
