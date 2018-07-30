// component/listcp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow:{
      type:Boolean,
      value:true
    },
    lists:{
      type:Array,
      value:[],
      observer: function (newVal, oldVal) {
        // console.log(newVal, oldVal) 
        // console.log(this.data.lists)       
        this.data.list = newVal
        // console.log(this.data.list)
       }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[]

  },
 

  /**
   * 组件的方法列表
   */
  methods: {
    previewimg(e){
      var src = e.currentTarget.dataset.src;
      wx.previewImage({
        urls: [src],
      })
    }
  }
})


// properties: {
//   url: {
//     type: String,
//       value:'',
//         observer: function (newVal, oldVal) {
//           console.log(newVal, oldVal)
//           this.data.list_urls = newVal
//           console.log(this.data.list)
//         }
//   }
// },
// data: {
//   url: '',
    
    
//   },

