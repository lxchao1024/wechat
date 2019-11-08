// pages/game/game1.js
// 上下文对象
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deg: 0, // 初始化角度
    singleAngle: 60, // 每片扇形的角度
    awardNumer: 1, // 中奖区域 从1开始
    isStart: false,
    animationData: {},

    btnDisabled: '',
    isPointer: true,
    is_play: false,// 是否在运动中，避免重复启动bug
    available_num: 0,// 可用抽奖的次数，可自定义设置或者接口返回
    start_angle: 0,// 转动开始时初始角度=0位置指向正上方，按顺时针设置，可自定义设置
    base_circle_num: 9,// 基本圈数，就是在转到（最后一圈）结束圈之前必须转够几圈 ，可自定义设置
    low_circle_num: 5,// 在第几圈开始进入减速圈（必须小于等于基本圈数），可自定义设置
    add_angle: 10,// 追加角度，此值越大转动越快，请保证360/add_angle=一个整数，比如1/2/3/4/5/6/8/9/10/12等
    use_speed: 1,// 当前速度，与正常转速值相等
    nor_speed: 1,// 正常转速，在减速圈之前的转速，可自定义设置
    low_speed: 10,// 减速转速，在减速圈的转速，可自定义设置
    end_speed: 20,// 最后转速，在结束圈的转速，可自定义设置
    random_angle: 0,// 中奖角度，也是随机数，也是结束圈停止的角度，这个值采用系统随机或者接口返回
    change_angle: 0,// 变化角度计数，0开始，一圈360度，基本是6圈，那么到结束这个值=6*360+random_angle；同样change_angle/360整除表示走过一整圈
    result_val: "未中奖",// 存放奖项容器，可自定义设置
    Jack_pots: [// 奖项区间 ，360度/奖项个数 ，一圈度数0-360，可自定义设置
      // random_angle是多少，在那个区间里面就是中哪个奖项
      {
        startAngle: 0,
        endAngle: 60,
        val: "1等奖"
      },
      {
        startAngle: 61,
        endAngle: 120,
        val: "2等奖"
      },
      {
        startAngle: 121,
        endAngle: 180,
        val: "3等奖"
      },
      {
        startAngle: 181,
        endAngle: 240,
        val: "4等奖"
      },
      {
        startAngle: 241,
        endAngle: 300,
        val: "5等奖"
      },
      {
        startAngle: 301,
        endAngle: 359,
        val: "6等奖"
      },
      {
        startAngle: 307,
        endAngle: 360,
        val: "未中奖"
      }
    ],
    anim: ''
  },

  /**
   * 启动抽奖
   */
  luckDrawStart: function () {
    // 阻止运动中重复点击
    if (!that.data.is_play) {
      // 设置标识在运动中
      that.setData({
        btnDisabled: 'disabled',
        is_play: true
      });
      // 重置参数
      that.luckDrawReset();
      // 几率随机，也可从服务端获取几率
      that.setData({
        random_angle: Math.ceil(Math.random() * 360)
      });

      console.log(this.data.random_angle)

      // 运动函数
      setTimeout(that.luckDrawChange, that.data.use_speed);
    };
  },

  /**
   * 转盘运动
   */
  luckDrawChange: function () {
    // 继续运动
    if (that.data.change_angle >= that.data.base_circle_num * 360 + that.data.random_angle) {// 已经到达结束位置
      // 提示中奖，
      that.getLuckDrawResult();
      // 运动结束设置可用抽奖的次数和激活状态设置可用
      that.luckDrawEndset();
    } else {// 运动
      if (that.data.change_angle < that.data.low_circle_num * 360) {// 正常转速
        // console.log("正常转速")
        that.data.use_speed = that.data.nor_speed
      } else if (that.data.change_angle >= that.data.low_circle_num * 360 && that.data.change_angle <= that.data.base_circle_num * 360) {// 减速圈
        // console.log("减速圈")
        that.data.use_speed = that.data.low_speed
      } else if (that.data.change_angle > that.data.base_circle_num * 360) {// 结束圈
        // console.log("结束圈")
        that.data.use_speed = that.data.end_speed
      }
      // 累加变化计数
      that.setData({
        change_angle: that.data.change_angle + that.data.add_angle >= that.data.base_circle_num * 360 + that.data.random_angle ? that.data.base_circle_num * 360 + that.data.random_angle : that.data.change_angle + that.data.add_angle
      });
      setTimeout(that.luckDrawChange, that.data.use_speed);
    }

  },

  /**
   * 重置参数
   */
  luckDrawReset: function () {
    // 转动开始时首次点亮的位置，可自定义设置
    that.setData({
      start_angle: 0
    });
    // 当前速度，与正常转速值相等
    that.setData({
      use_speed: that.data.nor_speed
    });
    // 中奖索引，也是随机数，也是结束圈停止的位置，这个值采用系统随机或者接口返回
    that.setData({
      random_angle: 0
    });
    // 变化计数，0开始，必须实例有12个奖项，基本是6圈，那么到结束这个值=6*12+random_number；同样change_num/12整除表示走过一整圈
    that.setData({
      change_angle: 0
    });
  },

  /**
   * 获取抽奖结果
   */
  getLuckDrawResult: function () {
    for (var j = 0; j < that.data.Jack_pots.length; j++) {
      if (that.data.random_angle >= that.data.Jack_pots[j].startAngle && that.data.random_angle <= that.data.Jack_pots[j].endAngle) {
        that.setData({
          result_val: that.data.Jack_pots[j].val
        });
        wx.showModal({
          title: '抽奖结果',
          content: that.data.Jack_pots[j].val,
        })
        break;
      };
    };
  },

  /**
   * 更新状态（运动结束设置可用抽奖的次数和激活状态设置可用）
   */
  luckDrawEndset: function () {
    // 是否在运动中，避免重复启动bug
    that.setData({
      is_play: false,
      btnDisabled: ''
    })
    // 可用抽奖的次数，可自定义设置
    that.setData({
      available_num: that.data.available_num - 1
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease-in-out'
    })
    this.animation = animation
  },

  onReady: function() {
    var anim = wx.createAnimation({
      delay: 0,
      duration: 1500,
      timingFunction: 'ease'
    })
    var that = this
    this.anim = anim
    var next = true
    this.anim.rotate(360).step()
    // setInterval(function () {
    //   if (next) {
        
    //   } else {
    //     this.anim.rotate(-360).step()
    //   }
    //   next = !next
      that.setData({
        anim: anim.export()
      })
    // }.bind(this), 150)
  },

  startAnim: function() {
    that = this;
    that.luckDrawStart();
    // console.log("isStart == " + this.data.isStart)
    // if (this.isStart) return

    // let tmpnum = Math.random()
    // console.log("tmpnum == " + tmpnum)

    // tmpnum = tmpnum < 0.5 ? tmpnum + 0.1 : tmpnum - 0.1
    // console.log("tmpnum == " + tmpnum)

    // const endAddAngle = (this.data.awardNumer - 1 + tmpnum) * this.data.singleAngle + 360 // 中奖角度
    // console.log("endAddAngle == " + endAddAngle)

    // const rangeAngle = (Math.floor(Math.random() * 4) + 4) * 360 // 随机旋转几圈再停止
    // console.log("rangeAngle == " + rangeAngle)

    // this.animation.rotate(this.data.deg + endAddAngle + rangeAngle).step()
    // this.data.animationData = this.animation.export()
    // var rotateAngle = this.data.deg + rangeAngle
    // var that = this
    // this.setData({
    //   deg: rotateAngle,
    //   animationData: that.animation.export()
    // })
  },

  close: function() {
    wx.navigateBack({
      delet:1
    })
  }
})