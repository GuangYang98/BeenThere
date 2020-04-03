<template>
	<div class="join-text-wrapper">
		<div class="join-title" >
			<p>欢迎加入 BeenThere 大家庭！</p>
		</div>
		<div>
			<div class="join-block">
				<v-img src="../assets/join/onlinebuddy.png" eager class="join-img"></v-img>
				<div class="join-block-content">
					<a href="https://wj.qq.com/s2/5703103/1d0b/" style="font-size: 3.5vw;">报名 Online Buddy</a>
					<p style="margin-top: 3vw;">作为提供倾听服务的志愿者，你将收获</p>
					<ul class="join-block-list">
						<li style="margin-top: 0.3vw;">帮助他人走出困境、实现目标</li>
						<li style="margin-top: 0.3vw;">学习心理知识、提升咨询技巧</li>
						<li style="margin-top: 0.3vw;">锻炼共情和沟通——AI时代最重要的人类能力</li>
						<li style="margin-top: 0.3vw;">为学业、职业的发展增加助力</li>
						<li style="margin-top: 0.3vw;">结识一群温暖、善良、优秀的同路人</li>
					</ul>
					<a href="https://wj.qq.com/s2/5703103/1d0b/">我要报名</a>
				</div>
			</div>
			<v-divider></v-divider>
			<div class="join-block">
				<div class="join-block-content">
					<a href="https://mp.weixin.qq.com/s/kdycFK7AJUqPyhVEjw7DKw" style="font-size: 3.5vw;">报名校园大使</a>
					<p style="margin-top: 3vw;">作为校园大使的你将负责</p>
					<ul class="join-block-list">
						<li style="margin-top: 0.3vw;">代表BeenThere与高校、高中开展合作</li>
						<li style="margin-top: 0.3vw;">收集反馈校内信息，开展学生端的市场调研</li>
						<li style="margin-top: 0.3vw;">运用BeenThere和校内资源多样化宣传推广</li>
						<li style="margin-top: 0.3vw;">负责校园活动的筹备、协调安排与现场支援</li>
					</ul>
					<a href="https://mp.weixin.qq.com/s/kdycFK7AJUqPyhVEjw7DKw">我要报名</a>
				</div>
				<v-img src="../assets/join/campus.png" eager class="join-img"></v-img>
			</div>
			<v-divider></v-divider>
			<div class="join-block">
				<v-img src="../assets/join/internship.png" eager class="join-img" style="height: 30vw;"></v-img>
				<div class="join-block-content">
					<a href="https://mp.weixin.qq.com/s/KXe5Ok_pF0NDhxuXREiZbA" style="font-size: 3.5vw;">报名实习生</a>
					<p style="margin-top: 3vw;">作为 BeenThere 实习生，你将获得</p>
					<ul class="join-block-list">
						<li style="margin-top: 0.3vw;">BeenThere官方实习证书，助力学业、职业发展</li>
						<li style="margin-top: 0.3vw;">享受提供给内部成员的所有配套资源与福利</li>
						<li style="margin-top: 0.3vw;">深入了解初创企业的管理运营及创新实践</li>
						<li style="margin-top: 0.3vw;">软实力的提升与自我成长</li>
						<li style="margin-top: 0.3vw;">结实一群有趣有梦的同路人</li>
					</ul>
					
					<p>目前开放的实习生岗位有</p>
					<ul class="join-block-list">
						<li style="margin-top: 0.3vw;">新媒体及短视频运营实习生</li>
						<li style="margin-top: 0.3vw;">技术与产品管理实习生</li>
						<li style="margin-top: 0.3vw;">平面设计师</li>
						<li style="margin-top: 0.3vw;">商务实习生</li>
					</ul>
					<a href="https://mp.weixin.qq.com/s/KXe5Ok_pF0NDhxuXREiZbA">我要报名</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// import Menu from "./Menu.vue"
	export default {
		name: "JoinContent",
		components:{
			// Menu,
		},
		mounted: () => {
			
		}
	}
	
</script>

<style scoped>
	.join-text-wrapper{
		margin-left: 20vw;
		width: 60vw;
		font-size: 1px;
		font-weight: bold;  
		font-family: roboto;
		height: auto;  
		word-wrap:break-word;  
		word-break:break-all;
		padding-bottom: 2vw;
		/* text-align: center; */
	}
	.join-title{
		margin-top: 3vw;
		font-size: 3.5vw;
		color: #E07171;
		text-align: center;
	}
	.join-img{
		width: 25vw;
		height: 20vw;
		display: inline-block;
	}
	.join-block{
		margin-top: 2vw; 
		padding-bottom: 2vw;
	}
	.join-block-content{
		display: inline-block;
		padding: 2vw;
	}
	.join-block-list{
		margin-left: 30px;
		margin-top: 1.5vw;
		padding-bottom: 1vw;
	}
	body{
		background-color: #FFFFFF;
	}
	a{
		color: #FFB74D;
	}
	
</style>
