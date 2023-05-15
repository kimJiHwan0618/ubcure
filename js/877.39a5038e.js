"use strict";(self["webpackChunkDTX_MEDI_PLATFORM"]=self["webpackChunkDTX_MEDI_PLATFORM"]||[]).push([[877],{62877:function(e,t,s){s.r(t),s.d(t,{default:function(){return j}});var r=function(){var e=this,t=e._self._c;return t("main",{staticClass:"user__management__main"},[t("UserPopup",{attrs:{popupEventFlag:e.popupEventFlag,popupState:e.popupState,selectedObj:e.selectedRowObj,infoObj:e.infoObj},on:{popupClose:e.popupToggle,refreshList:e.getUsers}}),t("section",{staticClass:"box__shadow__01 vertical__scroll grid__wrap"},[t("h3",{staticClass:"page__title"},[e._v(" "+e._s(this.$store.state.pageInfo["유저 관리"].title)+" ")]),t("h5",{staticClass:"page__sub__title f__regular"},[e._v(" "+e._s(this.$store.state.pageInfo["유저 관리"].subTitle)+" ")]),t("div",{staticClass:"add__or__search__wrap"},[t("ul",[t("li",[t("dl",[t("dt",[e._v("기관")]),t("dd",[t("select",{directives:[{name:"model",rawName:"v-model",value:e.orgnFilter,expression:"orgnFilter"}],ref:"orgnSelector",attrs:{name:"",id:""},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.orgnFilter=t.target.multiple?s:s[0]},e.gridDataFiltering]}},[t("option",{attrs:{value:""}},[e._v("전체")]),e._l(e.orgnList,(function(s){return t("option",{key:s.index,domProps:{value:s.orgnId}},[e._v(" "+e._s(s.orgnNm)+" ")])}))],2)])])]),t("li",[t("dl",[t("dt",[e._v("사용여부")]),t("dd",[t("select",{directives:[{name:"model",rawName:"v-model",value:e.useYnFilter,expression:"useYnFilter"}],ref:"useYnSelector",attrs:{name:"",id:""},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.useYnFilter=t.target.multiple?s:s[0]},e.gridDataFiltering]}},[t("option",{attrs:{value:""}},[e._v("전체")]),t("option",{attrs:{value:"사용"}},[e._v("사용")]),t("option",{attrs:{value:"미사용"}},[e._v("미사용")])])])])]),t("li",[t("dl",[t("dt",[e._v("사용자명")]),t("dd",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.userNameFilter,expression:"userNameFilter"}],staticClass:"custom__input",attrs:{type:"text"},domProps:{value:e.userNameFilter},on:{input:function(t){t.target.composing||(e.userNameFilter=t.target.value)}}})])])]),t("li",[t("button",{staticClass:"custom__btn",on:{click:e.gridDataFiltering}},[e._m(0),t("p",[e._v("검색")])])])]),t("button",{staticClass:"custom__btn",on:{click:function(t){return e.popupToggle("추가")}}},[e._m(1),t("p",[e._v("추가")])])]),t("div",{staticClass:"grid__wrap",on:{click:function(t){return e.rowClick(t)}}},[t("Grid",{ref:"gridEl",staticClass:"on",attrs:{cols:e.cols,pagination:!0,sort:!0,rows:e.filteredGridData}})],1)])],1)},i=[function(){var e=this,t=e._self._c;return t("span",[t("img",{attrs:{src:s(39615),alt:"검색 아이콘"}})])},function(){var e=this,t=e._self._c;return t("span",[t("img",{attrs:{src:s(69067),alt:"추가 아이콘"}})])}],a=(s(57658),s(28861)),n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"popup__wrap",class:{on:"Open"===e.popupEventFlag}},[t("div",{staticClass:"popup__bg"}),t("div",{staticClass:"common__popup user_management_popup box__shadow__02"},[t("div",{staticClass:"popup__top"},[t("h4",[e._v("사용자 "+e._s(e.popupState))]),t("button",{staticClass:"pop__close__btn",on:{click:e.popupCloseClick}})]),t("ul",[t("li",[t("dl",[t("dt",{staticClass:"f__medium"},[e._v("사용자 ID")]),t("dd",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.reqUserObj.userId,expression:"reqUserObj.userId"}],staticClass:"custom__input",attrs:{type:"text",disabled:"수정"===e.popupState},domProps:{value:e.reqUserObj.userId},on:{input:function(t){t.target.composing||e.$set(e.reqUserObj,"userId",t.target.value)}}})])])]),t("li",[t("dl",[t("dt",{staticClass:"f__medium"},[e._v("Email")]),t("dd",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.reqUserObj.userEmail,expression:"reqUserObj.userEmail"}],staticClass:"custom__input",attrs:{type:"email"},domProps:{value:e.reqUserObj.userEmail},on:{input:function(t){t.target.composing||e.$set(e.reqUserObj,"userEmail",t.target.value)}}})])])]),t("li",[t("dl",[t("dt",{staticClass:"f__medium"},[e._v("이름")]),t("dd",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.reqUserObj.userName,expression:"reqUserObj.userName"}],staticClass:"custom__input",attrs:{type:"text"},domProps:{value:e.reqUserObj.userName},on:{input:function(t){t.target.composing||e.$set(e.reqUserObj,"userName",t.target.value)}}})])])]),t("li",[t("dl",[t("dt",{staticClass:"f__medium"},[e._v("기관")]),t("dd",[t("select",{directives:[{name:"model",rawName:"v-model",value:e.reqUserObj.orgnId,expression:"reqUserObj.orgnId"}],ref:"orgnSelector",attrs:{name:"",id:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.reqUserObj,"orgnId",t.target.multiple?s:s[0])}}},[t("option",{attrs:{value:""}},[e._v("미지정")]),e._l(e.dataObj.orgnList,(function(s){return t("option",{key:s.index,domProps:{value:s.orgnId}},[e._v(" "+e._s(s.orgnNm)+" ")])}))],2)])])]),t("li",[t("dl",[t("dt",{staticClass:"f__medium"},[e._v("비밀번호")]),t("dd",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.reqUserObj.userPwd,expression:"reqUserObj.userPwd"}],staticClass:"custom__input",attrs:{type:"password"},domProps:{value:e.reqUserObj.userPwd},on:{input:function(t){t.target.composing||e.$set(e.reqUserObj,"userPwd",t.target.value)}}})])])]),e._e(),t("li",[t("dl",[t("dt",{staticClass:"f__medium"},[e._v("비밀번호 확인")]),t("dd",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.reqUserObj.userPwdCheck,expression:"reqUserObj.userPwdCheck"}],staticClass:"custom__input",attrs:{type:"password"},domProps:{value:e.reqUserObj.userPwdCheck},on:{input:function(t){t.target.composing||e.$set(e.reqUserObj,"userPwdCheck",t.target.value)}}})])])]),t("li",[t("dl",[t("dt",{staticClass:"f__medium"},[e._v("진료과/부서")]),t("dd",[t("select",{directives:[{name:"model",rawName:"v-model",value:e.reqUserObj.deptId,expression:"reqUserObj.deptId"}],ref:"orgnSelector",attrs:{name:"",id:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.reqUserObj,"deptId",t.target.multiple?s:s[0])}}},[t("option",{attrs:{value:""}},[e._v("선택")]),e._l(e.dataObj.deptList,(function(s){return t("option",{key:s.index,domProps:{value:s.codeId}},[e._v(" "+e._s(s.codeName)+" ")])}))],2)])])]),t("li",[t("dl",[t("dt",{staticClass:"f__medium"},[e._v("성별")]),t("dd",[t("select",{directives:[{name:"model",rawName:"v-model",value:e.reqUserObj.userGender,expression:"reqUserObj.userGender"}],attrs:{name:"",id:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.reqUserObj,"userGender",t.target.multiple?s:s[0])}}},[t("option",{attrs:{value:""}},[e._v("선택")]),t("option",{attrs:{value:"male"}},[e._v("남성")]),t("option",{attrs:{value:"female"}},[e._v("여성")])])])])]),t("li",[t("dl",[t("dt",{staticClass:"f__medium"},[e._v("권한")]),t("dd",[t("select",{directives:[{name:"model",rawName:"v-model",value:e.reqUserObj.roleId,expression:"reqUserObj.roleId"}],attrs:{name:"",id:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.reqUserObj,"roleId",t.target.multiple?s:s[0])}}},[t("option",{attrs:{value:""}},[e._v("선택")]),e._l(e.dataObj.roleList,(function(s){return t("option",{key:s.index,domProps:{value:s.codeId}},[e._v(" "+e._s(s.codeName)+" ")])}))],2)])])]),t("li",[t("dl",[t("dt",{staticClass:"f__medium"},[e._v("연락처")]),t("dd",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.reqUserObj.userHp,expression:"reqUserObj.userHp"}],staticClass:"custom__input",attrs:{type:"phone"},domProps:{value:e.reqUserObj.userHp},on:{input:function(t){t.target.composing||e.$set(e.reqUserObj,"userHp",t.target.value)}}})])])]),t("li",[t("dl",[t("dt",{staticClass:"f__medium"},[e._v("사용여부")]),t("dd",[t("select",{directives:[{name:"model",rawName:"v-model",value:e.reqUserObj.useYn,expression:"reqUserObj.useYn"}],attrs:{name:"",id:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.reqUserObj,"useYn",t.target.multiple?s:s[0])}}},[t("option",{attrs:{value:""}},[e._v("선택")]),t("option",{attrs:{value:"Y"}},[e._v("사용")]),t("option",{attrs:{value:"N"}},[e._v("미사용")])])])])])]),t("div",{staticClass:"custom__btn__wrap"},[t("button",{staticClass:"custom__btn delete",on:{click:e.removeOrClean}},[e._m(0),t("p",[e._v("삭제")])]),t("button",{staticClass:"custom__btn",on:{click:e.addUser}},[e._m(1),t("p",[e._v("저장")])])])])])},o=[function(){var e=this,t=e._self._c;return t("span",[t("img",{attrs:{src:s(55483),alt:"저장 아이콘"}})])},function(){var e=this,t=e._self._c;return t("span",[t("img",{attrs:{src:s(99685),alt:"저장 아이콘"}})])}],l=s(43578),u=s(32900),d=s(81260),p={props:{popupEventFlag:String,popupState:String,selectedObj:[Object,Boolean],infoObj:[Object,Boolean]},data(){return{reqUserObj:{userId:"",userPwd:"",userName:"",userHp:"",userGender:"",userEmail:"",orgnId:"",deptId:"",roleId:"",useYn:"",userCenter:""},dataObj:{}}},watch:{popupState(){this.dataObj=this.infoObj,"수정"===this.popupState?(this.reqUserObj=this.selectedObj,"사용"===this.selectedObj.useYn?this.reqUserObj.useYn="Y":"미사용"===this.selectedObj.useYn&&(this.reqUserObj.useYn="N"),"남성"===this.selectedObj.userGender?this.reqUserObj.userGender="male":"여성"===this.selectedObj.userGender&&(this.reqUserObj.userGender="female")):"추가"===this.popupState&&(0,l.ZH)(this.reqUserObj)}},methods:{popupCloseClick(){this.$emit("popupClose","Close")},addUser(){this.validateUser()&&("development"==this.$env&&console.log(this.reqUserObj),"수정"===this.popupState?(0,u.Nq)(this.reqUserObj).then((e=>{"OK"===e.data.status&&(this.$toast.success("사용자 수정이 완료되었습니다"),this.popupCloseClick(),this.$emit("refreshList"))})).catch((e=>this.$toast.error(e.message))):(0,u.cn)(this.reqUserObj).then((e=>{"development"==this.$env&&console.log(e),"OK"===e.data.status&&(this.$toast.success("사용자 추가가 완료되었습니다"),this.popupCloseClick(),this.$emit("refreshList"))})).catch((e=>this.$toast.error(e.message))))},validateUser(){return""===this.reqUserObj.userId||null===this.reqUserObj.userId?(this.$toast.error("사용자 아아디를 입력하세요."),!1):(0,d.oH)(this.reqUserObj.userPwd)?""===this.reqUserObj.userPwdCheck||null===this.reqUserObj.userPwdCheck?(this.$toast.error("사용자 비밀번호를 다시 입력하세요."),!1):this.reqUserObj.userPwd!==this.reqUserObj.userPwdCheck?(this.$toast.error("비밀번호를 일치하지 않습니다."),!1):""===this.reqUserObj.userName||null===this.reqUserObj.userName?(this.$toast.error("사용자 이름을 입력하세요."),!1):""===this.reqUserObj.userHp||null===this.reqUserObj.userHp?(this.$toast.error("연락처를 입력하세요."),!1):""===this.reqUserObj.userGender||null===this.reqUserObj.userGender?(this.$toast.error("성별을 입력하세요."),!1):""===this.reqUserObj.userEmail||null===this.reqUserObj.userEmail?(this.$toast.error("이메일을 입력하세요."),!1):""===this.reqUserObj.orgnId||null===this.reqUserObj.orgnId?(this.$toast.error("기관을 선택하세요."),!1):""===this.reqUserObj.deptId||null===this.reqUserObj.deptId?(this.$toast.error("진료과나 부서를 선택하세요."),!1):""===this.reqUserObj.roleId||null===this.reqUserObj.roleId?(this.$toast.error("권한을 선택하세요."),!1):""!==this.reqUserObj.useYn&&null!==this.reqUserObj.useYn||(this.$toast.error("사용여부를 입력하세요."),!1):(this.$toast.error("사용자 비밀번호는 6~20자 내 영문 대소문자, 숫자, 특수문자를 포함해야 합니다."),!1)},removeOrClean(){"수정"===this.popupState?(0,u.kX)(this.reqUserObj.userId).then((e=>{"development"==this.$env&&console.log(e),"OK"===e.data.status&&(this.$toast.success("사용자가 삭제되었습니다"),this.popupCloseClick(),this.$emit("refreshList"))})).catch((e=>this.$toast.error(e.message))):"추가"===this.popupState&&(0,l.ZH)(this.reqUserObj)}}},c=p,m=s(1001),v=(0,m.Z)(c,n,o,!1,null,null,null),h=v.exports,_=s(50722),g=s(75532),f={components:{Grid:a.rj,UserPopup:h},data(){return{popupEventFlag:"Close",cols:[{name:"번호",id:"index"},{name:"사용자ID",id:"userId"},{name:"이름",id:"userName"},{name:"연락처",id:"userHp"},{name:"성별",id:"userGender"},{name:"Email",id:"userEmail"},{name:"기관",id:"orgnNm"},{name:"진료과/부서",id:"codeName"},{name:"권한",id:"roleNm"},{name:"등록자",id:"registerName"},{name:"사용여부",id:"useYn"},{name:"등록일시",id:"createDate"}],userList:[],orgnList:[],orgnFilter:"",useYnFilter:"사용",userNameFilter:"",selectedRowObj:"",popupState:"",infoObj:{},filteredGridDataBack:[],filteredGridData:[]}},computed:{getUserList(){return this.userList}},created(){this.getOrgns(),this.getDepts(),this.getRoles(),this.getCenterList(),this.getUsers()},methods:{popupToggle(e){"추가"===e&&(this.selectedRowObj=!1),this.popupState=e,"Close"===this.popupEventFlag?this.popupEventFlag="Open":this.popupEventFlag="Close"},rowClick(e){const t=Number(e.path[1].childNodes[0].textContent),s=e.path[0].getAttribute("data-column-id");"userId"===s&&this.popupToggle("수정"),"development"==this.$env&&console.log(this.userList),this.selectedRowObj={...this.userList[t-1]}},getUsers(){(0,u.lE)().then((e=>{let t=this;t.userList=e.data.response.data,t.userList.forEach((function(e,s){e.index=s+1,"Y"===e.useYn?e.useYn="사용":e.useYn="미사용","male"===e.userGender?e.userGender="남성":e.userGender="여성",0==t.orgnList.filter((t=>t.orgnId===e.orgnId)).length&&(e.orgnNm="미지정",e.orgnId="")})),this.filteredGridDataBack=this.userList,""===this.orgnFilter&&""===this.userNameFilter&&"사용"===this.useYnFilter?(this.filteredGridData=this.userList,this.filteredGridData=this.filteredGridData.filter((e=>"사용"===e.useYn.trim()))):this.gridDataFiltering()}))},getOrgns(){(0,g.LZ)().then((e=>{this.orgnList=e.data.response.data.filter((e=>"Y"==e.useYn)),this.infoObj.orgnList=this.orgnList}))},getDepts(){let e="mainCommCode=DEPT&useYn=Y";(0,_.kP)(e).then((e=>{this.infoObj.deptList=e.data.response.codeList}))},getRoles(){let e="mainCommCode=ROLE&useYn=Y";(0,_.kP)(e).then((e=>{this.infoObj.roleList=e.data.response.codeList}))},getCenterList(){let e="mainCommCode=CNTR&useYn=Y";(0,_.kP)(e).then((e=>{this.infoObj.centerList=e.data.response.codeList}))},gridDataFiltering(){if(this.filteredGridData=this.filteredGridDataBack,""!==this.orgnFilter&&(this.filteredGridData=this.filteredGridData.filter((e=>e.orgnId.trim()===this.orgnFilter))),""!==this.useYnFilter&&(this.filteredGridData=this.filteredGridData.filter((e=>e.useYn.trim()===this.useYnFilter))),this.filteredGridData.length>0){const e=[];this.filteredGridData.forEach((t=>{t.userName.includes(this.userNameFilter)&&e.push(t)})),this.filteredGridData=e}}}},b=f,O=(0,m.Z)(b,r,i,!1,null,null,null),j=O.exports},50722:function(e,t,s){s.d(t,{KJ:function(){return n},QX:function(){return a},jE:function(){return o},kP:function(){return i},uH:function(){return l}});var r=s(18701);function i(e){return e?(0,r.U2)(`/system/commonCode?${e}`):(0,r.U2)("/system/commonCode")}function a(){return(0,r.U2)("/system/classificationCode")}function n(e){return(0,r.Ue)("/system/commonCode",e)}function o(e){return(0,r.Vx)(`/system/commonCode/${e.codeId}`,e)}function l(e){return(0,r.Od)(`/system/commonCode/${e}`)}},75532:function(e,t,s){s.d(t,{LZ:function(){return i},Qk:function(){return a},_X:function(){return n},iT:function(){return o}});var r=s(18701);function i(e){return e?(0,r.U2)(`/orgns?orgnName=${e.orgnName}&useYn=${e.useYn}`):(0,r.U2)("/orgns")}function a(e){return(0,r.Ue)("/orgns",e)}function n(e){return(0,r.Vx)(`/orgns/${e.orgnId}`,e)}function o(e){return(0,r.Od)(`/orgns/${e}`)}},69067:function(e,t,s){e.exports=s.p+"img/ic-plus.699e4fe1.svg"},55483:function(e,t,s){e.exports=s.p+"img/ic-remove.adf1b0c3.svg"},39615:function(e,t,s){e.exports=s.p+"img/ic-search.05d88541.svg"}}]);
//# sourceMappingURL=877.39a5038e.js.map