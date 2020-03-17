<template>
	<div style="padding-top: 140px; background-color: white; font-family: Roboto;" id="join-content-block">
		<div class="join-words" >
			<p>欢迎加入 BeenThere 大家庭！在这里，你可以</p>
			<ul style="margin-left: 2.2vw;">
				<li style="margin-top: 1vw;"><p>获得有关心理咨询的第一手知识与实践 </p></li>
				<li style="margin-top: 1vw;"><p>帮助他人走出困境、迸发潜能</p></li>
				<li style="margin-top: 1vw;"><p>疏解自己的困扰，实现自己的目标</p></li>
				<li style="margin-top: 1vw;"><p>遇见彩虹一般的人</p></li>
			</ul>
			
			<p style="margin-top: 3vw;">作为兼职志愿者，主要的投入包括</p>
			<ul style="margin-left: 2.2vw;">
				<li style="margin-top: 1vw;"><p>作为兼职志愿者，主要的投入包括：</p></li>
				<li style="margin-top: 1vw;"><p> 3～5 小时（培训+服务）</p></li>
				<li style="margin-top: 1vw;"><p>不定期撰写知识文章</p></li>
			</ul>
			<p style="margin-top: 5vw;">点击按钮填写报名，提交后会有小助手与您取得联系！</p>
		</div>
		<div class="join-question-title">
			<!-- <div>
				<p>您的姓名 *</p>
				<v-text-field style="width: 50vw;"></v-text-field>
			</div>
			
			<div>
				<p>您的微信ID *</p>
				<v-text-field style="width: 50vw;"></v-text-field>
			</div>
			
			<div>
				<p>您的常用邮箱 *</p>
				<v-text-field style="width: 50vw;"></v-text-field>
			</div>
			
			<div>
				<p>您的学校、专业，或工作单位、现任岗位 *</p>
				<p style="color: gray; font-size: 1.5vw;" id="join-comment">为保证团队质量，我们会进行一定的背景调查</p>
				<v-text-field style="width: 50vw;"></v-text-field>
			</div>
			
			<div>
				<p>请您简单介绍一下自己 *</p>
				<v-text-field style="width: 50vw;"></v-text-field>
			</div>
			
			<div>
				<p>为什么希望加入 BeenThere？ *</p>
				<v-text-field style="width: 50vw;"></v-text-field>
			</div> -->
			
			
		</div>
		<div class="join-submit">
			<!-- <v-btn style="background-color: #FFB74D; color: white;" large>
				提交
			</v-btn> -->
			<div><a href="https://tawk.to/chat/5d0cf96336eab972111899f7/default" class="home-tawk-to">加入我们</a></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "JoinContent",
		mounted: () => {
			
		}
	}
	
</script>

<style>
	.join-words{
		padding-left: 5vw; 
		padding-top: 5vw; 
		font-weight: bold;
	}
	.join-question-title{
		padding-left: 5vw; 
		padding-top: 3vw;
	}
	.join-submit{
		padding-left: 5vw; 
		padding-top: 1vw; 
		padding-bottom: 5vw;
		font-weight: bold;
	}
</style>
