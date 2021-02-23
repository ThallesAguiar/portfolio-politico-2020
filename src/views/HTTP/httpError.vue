<template>
  <v-container class="background-error" :class="'e'+errorCode" fill-height fluid>
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 class="text-center">
        
        <div class="center-box">
          <v-img contain width="100%" class="pt-4" :src="setImageSrc(errorCode)">
          </v-img>
        </div>
        <p class="font-weight-bold title-2 text-center ma-0">{{errorMessage}}</p>
          <p>
            <a class="font-weight-bold" @click="$router.back()">{{errorLinkMessage}}</a>
          </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    errorCode: {
      type: String,
      default: ""
    },
    errorMessage: {
      type: String,
      default: ""
    },
    errorLinkMessage: {
      type: String,
      default: ""
    }
  },
  data(){
    return {
      e404:'https://image.freepik.com/vetores-gratis/erro-404-com-erro-wedsite-do-separador-de-icone_114341-27.jpg',
      e500:'https://previews.123rf.com/images/upixel123/upixel1231310/upixel123131000100/23269730-computer-sign-500-internal-server-error.jpg'
    }
  },
  methods:{
    setImageSrc(c){
      switch (parseInt(c)) {
        case 404:
          return this.e404
         
        case 500:
          return this.e500

        default:
          return this.e500
      }
    }
  }
};
</script>

<style>
  .center-box{
    margin: 0px auto 0px auto;
    max-width: 200px;
  }
  .display-5{
    font-size: 86pt;
    line-height: 86px;
  }
  .background-error{
    background-position: center center, center center;
    background-size: contain,cover;
  }
  .e404{
    background-image:  radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(185, 214, 236, 0.95) 40%, rgba(132, 179, 218, 0.5) 63%), url('https://image.freepik.com/vetores-gratis/erro-404-com-erro-wedsite-do-separador-de-icone_114341-27.jpg');
  }
  .e500{
    background-image:  radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(185, 214, 236, 0.95) 40%, rgba(132, 179, 218, 0.5) 63%), url('https://previews.123rf.com/images/upixel123/upixel1231310/upixel123131000100/23269730-computer-sign-500-internal-server-error.jpg');
  }
</style>