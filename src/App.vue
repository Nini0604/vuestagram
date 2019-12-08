<template>
<div>
 <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="activeTabNum == 1" @click="activeTabNum = 2">Next</li>
      <li v-if="activeTabNum == 2" @click="uploadPost">Done</li>
    </ul>
    <img src="./assets/logo.png" class="logo">
  </div>
  <Body :posts="posts" :activeTabNum="activeTabNum" :uploadImage="uploadImage" v-on:writeText="writeText=$event"/>
  <div class="footer">
    <ul class="footer-button-plus">
      <li>
        <input type="file" id="file" class="inputfile" v-on:change="upload">
        <label for="file" class="input-plus">+</label>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import Body from './components/Body.vue';
import posts from './assets/posts.js';

export default {
  name: 'app',
  data(){
    return {
      posts: posts,
      activeTabNum: 0,
      uploadImage: '',
      writeText: ''
    }
  },
  components: {
    Body
  },
  methods: {
    upload(e) {
      // 1. 다음페이지로 이동
      this.activeTabNum = 1;
      // 2. 업로드한 이미지를 Body.vue에 vue에 보여줘야함
      let files = e.target.files;
      let reader = new FileReader();
      //파일 긴문자로 압축
      reader.readAsDataURL(files[0]);
      //3. body에 그 이미지를 보여줘야함(데이터바인딩)
      reader.onload = e => {
        /* eslint-disable */
        console.log(e.target.result);
        this.uploadImage = e.target.result;
      }
    },
    uploadPost() {
      // 1. 메인페이지로 이동
      this.activeTabNum = 0;
      // 2. 내 게시물이 저기 메이페이지에 보여야함(this.포스팅들에다가 데이터에 우리 데이터를 추가함)
      var postData = {
        name: "nini",
        userImage: "https://placeimg.com/100/100/arch", 
        postImage: this.uploadImage, 
        likes: 36,
        date: '1208',
        liked: false,
        caption: this.writeText, 
        filter: "perpetua"
      }
      this.posts.unshift(postData);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
}
ul{
  padding: 5px; list-style-type: none; }
.logo {
  width:22px;
  margin: auto;
  display: block; position: absolute; left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px; background-color: white; padding-bottom: 8px; position: sticky;
  top: 0;
}
.header-button-left { color: skyblue;
  float: left;
  width: 50px; padding-left: 20px; cursor: pointer; margin-top: 10px;
}
.header-button-right { color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer; margin-top: 10px;
}
.footer{
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px; background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box{
  width: 100%;
  height: 600px; 
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer
}
#app {
  box-sizing: border-box; font-family: 'consolas'; margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative; border-right: 1px solid #eee; border-left: 1px solid #eee; 
}
</style>
