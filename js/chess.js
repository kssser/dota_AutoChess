var existBug='exist bug';

function Chess(){
	// 种族 (子对象中键名有 (1)字符串类型的数字,(2)唯一,(3)任意)
	this.race={
		"人类":{
			"2":"友方人类攻击20%概率使敌人沉默4秒",
			"4":"友方人类攻击25%概率使敌人沉默4秒",
			"6":"友方人类攻击30%概率使敌人沉默4秒"
		},
		"兽人":{
			"2":"友方兽人血量+200",
			"4":"友方兽人血量+500[+200+300]"
		},
		"亡灵":{
			"2":"敌方全体护甲-4",
			"4":"敌方全体护甲-10[-4-6]"
		},
		"野兽":{
			"3":"友方全体攻击+20%(召唤物可继承)",
			"6":"友方全体攻击+50%(召唤物可继承)[+20%+30%]"
		},
		"地精":{
			"3":"随机一友军护甲+15回血+10",
			"6":"友方全体护甲+15回血+10"
		},
		"巨魔":{
			"2":"友方巨魔攻速+35",
			"4":"友方巨魔攻速+30，其中巨魔攻速+65[+35+30]"
		},
		"精灵":{
			"3":"友方精灵闪避+20%",
			"6":"友方精灵闪避+45%[+20%+25%]",
			"9":"友方精灵闪避+75%[+20%+25%+30%]"
		},
		"恶魔":{
			"唯一":"友方场上存在唯一恶魔时，该恶魔攻击+50%"
		},
		"娜迦":{
			"2":"友方全体魔抗+30",
			"4":"友方全体魔抗+60[+30+30]"
		},
		"元素":{
			"2":"友方元素被近战攻击时30%几率将其石化",
			"4":"友方全体被近战攻击时30%几率将其石化"
		},
		"龙":{
			"3":"友方龙开局满蓝"
		},
		"矮人":{
			"任意":"友方矮人攻击距离+300"
		},
		"食人魔":{
			"任意":"友方食人魔血量+10%"
		},
		"萨特":{
			"任意":"有萨特存在等待区时，隐藏等待区棋子"
		}
	};
	// 职业
	this.career={
		"法师":{
			"3":"友方全体魔抗-30",
			"6":"友方全体魔抗-90[-30-60]"
		},
		"战士":{
			"3":"友方战士护甲+7",
			"6":"友方战士护甲+15[+7+8]",
			"9":"友方战士护甲+25[+7+8+10]"
		},
		"骑士":{
			"2":"友方骑士减伤护盾时间+25%",
			"4":"友方骑士减伤护盾时间+60%[+25%+35%]",
			"6":"友方骑士减伤护盾时间+105%[+25%+35%+45%]"
		},
		"术士":{
			"3":"友方全体吸血+20%",
			"6":"友方全体吸血+50%[+20%+30%]"
		},
		"猎人":{
			"3":"友方猎人攻击+25%",
			"6":"友方猎人攻击+55%[+25%+30%]"
		},
		"工匠":{
			"2":"友方工匠回血+15",
			"4":"友方工匠回血+40[+15+25]"
		},
		"刺客":{
			"3":"友方刺客普攻10%造成4倍伤害",
			"6":"友方刺客普攻20%造成4被伤害"
		},
		"德鲁伊":{
			"2":"2个相同1星可升至2星",
			"4":"2个相同2星可升至3星"
		},
		"萨满祭司":{
			"2":"开局随机羊一敌人6s"
		},
		"恶魔猎手":{
			"任意":"敌方恶魔不加攻击"
		},
	};
	// 英雄
	this.hero={
		"斧王":{race:["兽人"],career:"战士",skill:{name:"狂战士之吼",type:"active"},money:1},
		"魅惑魔女":{race:["野兽"],career:"德鲁伊",skill:{name:"自然之助",type:"active"},money:1},
		"食人魔魔法师":{race:["食人魔"],career:"法师",skill:{name:"嗜血术",type:"active"},money:1},
		"巨牙海民":{race:["野兽"],career:"战士",skill:{name:"海象神拳",type:"active"},money:1},
		"卓尔游侠":{race:["亡灵"],career:"猎人",skill:{name:"射手天赋",type:"passive"},money:1},
		"赏金猎人":{race:["地精"],career:"刺客",skill:{name:"投掷飞镖",type:"active"},money:1},
		"发条技师":{race:["地精"],career:"工匠",skill:{name:"弹幕冲击",type:"active"},money:1},
		"暗影萨满":{race:["巨魔"],career:"萨满祭司",skill:{name:"妖术",type:"active"},money:1},
		"蝙蝠骑士":{race:["巨魔"],career:"骑士",skill:{name:"粘性燃油",type:"active"},money:1},
		"修补匠":{race:["地精"],career:"工匠",skill:{name:"热导飞弹",type:"active"},money:1},
		"敌法师":{race:["精灵"],career:"恶魔猎手",skill:{name:"法力损毁",type:"passive"},money:1},
		"小小":{race:["元素"],career:"战士",skill:{name:"投掷",type:"active"},money:1},
		"水晶室女":{race:["人类"],career:"法师",skill:{name:"奥术光环",type:"passive"},money:2},
		"兽王":{race:["兽人"],career:"猎人",skill:{name:"野性之斧",type:"active"},money:2},
		"剑圣":{race:["兽人"],career:"战士",skill:{name:"剑刃风暴",type:"active"},money:2},
		"伐木机":{race:["地精"],career:"工匠",skill:{name:"死亡旋风",type:"active"},money:2},
		"痛苦女王":{race:["恶魔"],career:"刺客",skill:{name:"痛苦尖叫",type:"active"},money:2},
		"精灵龙":{race:["精灵","龙"],career:"法师",skill:{name:"幻象法球",type:"active"},money:2},
		"巫医":{race:["巨魔"],career:"术士",skill:{name:"麻痹药剂",type:"active"},money:2},
		"鱼人守卫":{race:["娜迦"],career:"战士",skill:{name:"侵蚀雾霭",type:"active"},money:2},
		"混沌骑士":{race:["恶魔"],career:"骑士",skill:{name:"混乱之箭",type:"active"},money:2},
		"树精卫士":{race:["精灵"],career:"德鲁伊",skill:{name:"寄生种子",type:"active"},money:2},
		"月之骑士":{race:["精灵"],career:"骑士",skill:{name:"月刃",type:"passive"},money:2},
		"先知":{race:["精灵"],career:"德鲁伊",skill:{name:"自然的呼唤",type:"active"},money:2},
		"鱼人夜行者":{race:["娜迦"],career:"刺客",skill:{name:"突袭",type:"active"},money:2},
		"变体精灵":{race:["元素"],career:"刺客",skill:{name:"波浪形态",type:"active"},money:2},
		"狼人":{race:["人类","野兽"],career:"战士",skill:{name:"变身",type:"active"},money:3},
		"剧毒术士":{race:["野兽"],career:"术士",skill:{name:"瘟疫守卫",type:"active"},money:3},
		"全能骑士":{race:["人类"],career:"骑士",skill:{name:"洗礼",type:"active"},money:3},
		"闪电幽魂":{race:["元素"],career:"法师",skill:{name:"等离子场",type:"active"},money:3},
		"风行者":{race:["精灵"],career:"猎人",skill:{name:"强力击",type:"active"},money:3},
		"幻影刺客":{race:["精灵"],career:"刺客",skill:{name:"恩赐解脱",type:"passive"},money:3},
		"死亡骑士":{race:["亡灵"],career:"骑士",skill:{name:"无光之盾",type:"active"},money:3},
		"沙王":{race:["野兽"],career:"刺客",skill:{name:"掘地穿刺",type:"active"},money:3},
		"狙击手":{race:["矮人"],career:"猎人",skill:{name:"暗杀",type:"active"},money:3},
		"冥界亚龙":{race:["龙"],career:"刺客",skill:{name:"蝮蛇突袭",type:"active"},money:3},
		"影魔":{race:["恶魔"],career:"术士",skill:{name:"魂之挽歌",type:"active"},money:3},
		"秀逗魔导士":{race:["人类"],career:"法师",skill:{name:"神灭斩",type:"active"},money:3},
		"灵魂守卫":{race:["恶魔"],career:"恶魔猎手",skill:{name:"魔化",type:"active"},money:3},
		"隐形刺客":{race:["萨特"],career:"刺客",skill:{name:"烟幕弹",type:"active"},money:3},
		"月之女祭司":{race:["精灵"],career:"猎人",skill:{name:"月神箭",type:"active"},money:3},
		"末日使者":{race:["恶魔"],career:"战士",skill:{name:"末日",type:"active"},money:4},
		"海上将军":{race:["人类"],career:"战士",skill:{name:"幽灵船",type:"active"},money:4},
		"巨魔战将":{race:["巨魔"],career:"战士",skill:{name:"热血战魂",type:"passive"},money:4},
		"光之守卫":{race:["人类"],career:"法师",skill:{name:"冲击波",type:"active"},money:4},
		"死灵法师":{race:["亡灵"],career:"术士",skill:{name:"死亡脉冲",type:"active"},money:4},
		"圣堂刺客":{race:["精灵"],career:"刺客",skill:{name:"折光",type:"active"},money:4},
		"炼金术士":{race:["地精"],career:"术士",skill:{name:"化学狂暴",type:"active"},money:4},
		"干扰者":{race:["兽人"],career:"萨满祭司",skill:{name:"静态风暴",type:"active"},money:4},
		"蛇发女妖":{race:["娜迦"],career:"猎人",skill:{name:"石化凝视",type:"active"},money:4},
		"龙骑士":{race:["人类","龙"],career:"骑士",skill:{name:"古龙形态",type:"active"},money:4},
		"利爪德鲁伊":{race:["野兽"],career:"德鲁伊",skill:{name:"熊灵伙伴",type:"active"},money:4},
		"矮人直升机":{race:["矮人"],career:"工匠",skill:{name:"召唤飞弹",type:"active"},money:5},
		"巫妖":{race:["亡灵"],career:"法师",skill:{name:"连环霜冻",type:"active"},money:5},
		"潮汐猎人":{race:["娜迦"],career:"猎人",skill:{name:"毁灭",type:"active"},money:5},
		"谜团":{race:["元素"],career:"术士",skill:{name:"午夜凋零",type:"active"},money:5},
		"地精工程师":{race:["地精"],career:"工匠",skill:{name:"自爆炸药桶",type:"active"},money:5},
		"死亡先知":{race:["亡灵"],career:"术士",skill:{name:"驱使恶灵",type:"active"},money:5}
	};
	// 装备
	this.equipment=new _Equipment();
}
Chess.prototype._formatHero=function(heroName){
	var self=this;
	var hero=this.hero[heroName];
	return {
		hero:heroName,
		race:{
			race:hero.race.join(" "),
			buff:(function(){
					var buf=[];
					hero.race.forEach(function(item){
						buf.push({
							race:item,
							buff:self.race[item]
						});
					});
					return buf;
				})()
		},
		career:{
			career:hero.career,
			buff:this.career[hero.career]
		},
		skill:hero.skill,
		money:hero.money
	}
}
// aHeroList=>sHeroHtml
Chess.prototype._formatHeroHtml=function(heroList,$el){
	var sHtml='',
		sPlaceHolder='<i class="placeholder"></i>';
	heroList.forEach(function(item){
		var sTitle='<p>'+item.hero+' ( '+item.race.race+' '+item.career.career+' ) '+item.skill.name+'('+(item.skill.type==="active"?"主动":"被动")+')'+' ×'+item.money+'</p>',
			sContent=(function(){
					var s='';
					item.race.buff.forEach(function(itm){
						s+='<p class="ti1em"><em class="buff-title">'+itm.race+'</em>';
						for(var b in itm.buff){
							s+=b+'-'+itm.buff[b]+sPlaceHolder;
						}
						s=s.substr(0,s.length-sPlaceHolder.length);
						s+='</p>';
					});
					s+='<p class="ti1em"><em class="buff-title">'+item.career.career+'</em>';
					for(var c in item.career.buff){
						s+=c+'-'+item.career.buff[c]+sPlaceHolder;
					}
					s=s.substr(0,s.length-sPlaceHolder.length);
					s+='</p>';
					return '<div class="hero-buff">'+s+'</div>';
				})(),
			sHero='<div class="hero">'+sTitle+sContent+'</div>';
		sHtml+=sHero;
	});
	$el.html(sHtml);
	return this;
};
// aBuffList=>sBuffHtml
Chess.prototype._formatBuffHtml=function(buffList,$el){
	var sHtml='';
	buffList.forEach(function(item){
		for(var p in item)
			sHtml+='<p class="ti1em"><em class="buff-title">'+p+'</em>'+(function(oBuff){
					var s='';
					for(var p in oBuff)
						s+=p+'-'+oBuff[p];
					return s;
				})(item[p])+'</p>';
	});
	$el.html(sHtml);
	return this;
};
// 英雄名查询(可模糊查询) return Array
Chess.prototype.getHero=function(hero){
	var res=[];
	for(var p in this.hero)
		if(p.search(hero)!==-1)
			res.push(this._formatHero(p));
	return res;
};
// 种族查询(指定种族) return Array
Chess.prototype.getHeroByRace=function(race){
	var res=[];
	for(var p in this.hero)
		if(this.hero[p].race.indexOf(race)!==-1)
			res.push(this._formatHero(p));
	return res;
};
// 职业查询(指定职业) return Array
Chess.prototype.getHeroByCareer=function(career){
	var res=[];
	for(var p in this.hero)
		if(this.hero[p].career===career)
			res.push(this._formatHero(p));
	return res;
};
// 查询单条buff(arguments=>'race' or 'career',race or career,number) return Object
Chess.prototype.getBuffByMessage=function(prop,type,num){
	var res={},
		hasRes=false;
	var oBuff=this[prop][type];
	for(var p in oBuff){
		if(+p>0){
			if(num>=+p){
				res[type]={};
				res[type][p]=oBuff[p];
				!hasRes&&(hasRes=true);
			}else
				break;
		}else{
			switch(p){
				case '任意':
					res[type]={};
					res[type][p]=oBuff[p];
					!hasRes&&(hasRes=true);
					break;
				case '唯一':
					if(num===1){
						res[type]={
							1:oBuff[p]
						};
						!hasRes&&(hasRes=true);
					}
					break;
			}
		}
	}
	if(hasRes)
		return res;
};
// 查询全队buff(指定team(Array)) return Array
Chess.prototype.getBuff=function(team){
	var self=this;
	var oBuff={
			race:{},
			career:{}
		},
		res=[];
	team.forEach(function(item){
		var hero=self.hero[item];
		if(hero!==undefined){
			hero.race.forEach(function(itm){
				if(itm in oBuff.race)
					oBuff.race[itm]++;
				else
					oBuff.race[itm]=1;
			});
			if(hero.career in oBuff.career)
				oBuff.career[hero.career]++;
			else
				oBuff.career[hero.career]=1;
		}
	});
	for(var p in oBuff)
		for(var pp in oBuff[p]){
			var buff=this.getBuffByMessage(p,pp,oBuff[p][pp]);
			if(buff!==undefined)
				res.push(buff);
		}
	return res;
};
// 装备构造器
function _Equipment(){
	// 基本装备range=0,合成装备range>0
	this.species={
		"圆盾":{
			effect:"100%格挡10点伤害",
			needs:null,
			upgrade:["先锋盾"],
			range:0
		},
		"回复指环":{
			effect:"回血+5",
			needs:null,
			upgrade:["挑战头巾"],
			range:0
		},
		"治疗指环":{
			effect:"回血+10",
			needs:null,
			upgrade:["坚韧球","挑战头巾","先锋盾"],
			range:0
		},
		"抗魔斗篷":{
			effect:"魔抗+15",
			needs:null,
			upgrade:["挑战头巾"],
			range:0
		},
		"锁子甲":{
			effect:"护甲+5",
			needs:null,
			upgrade:["刃甲","强袭胸甲"],
			range:0
		},
		"板甲":{
			effect:"护甲+10",
			needs:null,
			upgrade:["强袭胸甲"],
			range:0
		},
		"活力之球":{
			effect:"血量+250",
			needs:null,
			upgrade:["先锋盾","恐鳌之心"],
			range:0
		},
		"极限法球":{
			effect:"血量+250，受到伤害时获得的法力值+25%",
			needs:null,
			upgrade:["邪恶镰刀"],
			range:0
		},
		"掠夺者之斧":{
			effect:"血量+500，回血+10",
			needs:null,
			upgrade:["恐鳌之心"],
			range:0
		},
		"吸血面具":{
			effect:"吸血+5%",
			needs:null,
			upgrade:["疯狂面具"],
			range:0
		},
		"短棍":{
			effect:"攻击+5，攻速+10",
			needs:null,
			upgrade:["疯狂面具","金箍棒"],
			range:0
		},
		"攻击之爪":{
			effect:"攻击+10",
			needs:null,
			upgrade:["水晶剑","代达罗斯之殇"],
			range:0
		},
		"秘银锤":{
			effect:"攻击+15",
			needs:null,
			upgrade:["暗灭","雷神之锤"],
			range:0
		},
		"标枪":{
			effect:"攻击+15",
			needs:null,
			upgrade:["雷神之锤","金箍棒"],
			range:0
		},
		"阔剑":{
			effect:"攻击+20",
			needs:null,
			upgrade:["刃甲","水晶剑","代达罗斯之殇"],
			range:0
		},
		"恶魔刀锋":{
			effect:"攻击+30",
			needs:null,
			upgrade:["代达罗斯之殇","金箍棒","圣剑"],
			range:0
		},
		"圣者遗物":{
			effect:"攻击+50",
			needs:null,
			upgrade:["圣剑"],
			range:0
		},
		"振奋宝石":{
			effect:"攻速+30",
			needs:null,
			upgrade:["强袭胸甲","雷神之锤","银月之晶"],
			range:0
		},
		"枯萎之石":{
			effect:"敌人护甲-3",
			needs:null,
			upgrade:["暗灭"],
			range:0
		},
		"王冠":{
			effect:"造成伤害时获得的法力值+50％",
			needs:null,
			upgrade:["达贡之神力"],
			range:0
		},
		"虚无宝石":{
			effect:"造成伤害时获得的法力值+100%",
			needs:null,
			upgrade:["坚韧球","邪恶镰刀"],
			range:0
		},
		"法师长袍":{
			effect:"被攻击的敌人魔抗-20",
			needs:null,
			upgrade:["慧光"],
			range:0
		},
		"魔力法杖":{
			effect:"被攻击的敌人魔抗-30",
			needs:null,
			upgrade:["慧光","达贡之神力"],
			range:0
		},
		"神秘法杖":{
			effect:"被攻击的敌人魔抗-40，造成伤害时获得的法力值+100%",
			needs:null,
			upgrade:["邪恶镰刀"],
			range:0
		},
		"闪烁匕首":{
			effect:"瞬间移动到本列前方能攻击的格子",
			needs:null,
			upgrade:null,
			range:0
		},
		"刃甲":{
			effect:"攻击+10，护甲+5，反弹敌人10%伤害",
			needs:["锁子甲","阔剑"],
			upgrade:null,
			range:1
		},
		"挑战头巾":{
			effect:"回血+15，魔抗+30",
			needs:["治疗指环","回复指环","抗魔斗篷"],
			upgrade:null,
			range:1
		},
		"先锋盾":{
			effect:"血量+250，回血+10，50%格挡50点伤害",
			needs:["圆盾","治疗指环","活力之球"],
			upgrade:null,
			range:1
		},
		"恐鳌之心":{
			effect:"血量+1000，回血+1%/2s",
			needs:["掠夺者之斧","活力之球","活力之球"],
			upgrade:null,
			range:1
		},
		"强袭胸甲":{
			effect:"周围一格，友军护甲+10，攻速+15，敌军护甲-10，攻速-15",
			needs:["板甲","锁子甲","振奋宝石"],
			upgrade:null,
			range:1
		},
		"坚韧球":{
			effect:"回血+10，造成伤害时获得的法力值+100%",
			needs:["治疗指环","虚无宝石"],
			upgrade:["狂战斧","刷新球"],
			range:1
		},
		"慧光":{
			effect:"被攻击敌人魔抗-100",
			needs:["魔力法杖","法师长袍"],
			upgrade:null,
			range:1
		},
		"邪恶镰刀":{
			effect:"被攻击的敌人魔抗-20，造成和受到伤害时获得的法力值+50%，血量+250",
			needs:["神秘法杖","极限法球","虚无宝石"],
			upgrade:null,
			range:1
		},
		"达贡之神力":{
			effect:"被攻击敌人魔抗-30，造成伤害时获得的法力值+50%，主动对随机敌人造成400点魔法伤害",
			needs:["王冠","魔力法杖"],
			upgrade:["达贡之神力(2)"],
			range:1
		},
		"水晶剑":{
			effect:"攻击力+15，15%概率1.5倍伤害",
			needs:["阔剑","攻击之爪"],
			upgrade:["代达罗斯之殇"],
			range:1
		},
		"暗灭":{
			effect:"攻击+30，敌人护甲-15",
			needs:["秘银锤","秘银锤","枯萎之石"],
			upgrade:null,
			range:1
		},
		"雷神之锤":{
			effect:"攻击+50，攻速+30，25%触发闪电(最多5个敌人造成200点伤害)",
			needs:["秘银锤","标枪","振奋宝石"],
			upgrade:null,
			range:1
		},
		"金箍棒":{
			effect:"攻击+80，攻速+10，无视闪避",
			needs:["恶魔刀锋","标枪","短棍"],
			upgrade:null,
			range:1
		},
		"圣剑":{
			effect:"攻击+150",
			needs:["圣者遗物","恶魔刀锋"],
			upgrade:null,
			range:1
		},
		"疯狂面具":{
			effect:"吸血+10%，攻速+30，沉默自己",
			needs:["吸血面具","短棍"],
			upgrade:null,
			range:1
		},
		"银月之晶":{
			effect:"攻速+70",
			needs:["振奋宝石","振奋宝石"],
			upgrade:null,
			range:1
		},
		"狂战斧":{
			effect:"攻击+30，回血+10，造成伤害时获得的法力值+100%，近战300码50%溅射",
			needs:["恶魔刀锋","坚韧球"],
			upgrade:null,
			range:2
		},
		"代达罗斯之殇":{
			effect:"攻击+40，10%概率4倍伤害",
			needs:["恶魔刀锋","水晶剑"],
			upgrade:null,
			range:2
		},
		"刷新球":{
			effect:"造成伤害时获得的法力值+200%，刷新技能cd，冷却30s",
			needs:["坚韧球","坚韧球"],
			upgrade:null,
			range:2
		},
		"达贡之神力(2)":{
			effect:"被攻击敌人魔抗-60，造成伤害时获得的法力值+50%，主动对随机敌人造成500点魔法伤害",
			needs:["魔力法杖","达贡之神力"],
			upgrade:["达贡之神力(3)"],
			range:2
		},
		"达贡之神力(3)":{
			effect:"被攻击敌人魔抗-90，造成伤害时获得的法力值+50%，主动对随机敌人造成600点魔法伤害",
			needs:["魔力法杖","达贡之神力(2)"],
			upgrade:["达贡之神力(4)"],
			range:3
		},
		"达贡之神力(4)":{
			effect:"被攻击敌人魔抗-120，造成伤害时获得的法力值+50%，主动对随机敌人造成700点魔法伤害",
			needs:["魔力法杖","达贡之神力(3)"],
			upgrade:["达贡之神力(5)"],
			range:4
		},
		"达贡之神力(5)":{
			effect:"被攻击敌人魔抗-150，造成伤害时获得的法力值+50%，主动对随机敌人造成800点魔法伤害",
			needs:["魔力法杖","达贡之神力(4)"],
			upgrade:null,
			range:5
		}
	}
}
// 检测是否存在某装备 return true or false
_Equipment.prototype.verifyExist=function(equipment){
	return equipment in this.species?true:false;
};
// 统一格式化指定装备
_Equipment.prototype.formatEquipment=function(equipment){
	return this.verifyExist(equipment)?Object.assign({},this.species[equipment],{name:equipment}):undefined;
};
// 目前range范围=>[0,5]
_Equipment.prototype.getRangeEquipments=function(range){
	var res=[];
	for(var p in this.species)
		if(this.species[p].range===range)
			res.push(p);
	return res;
};
// 得到当前装备的range，没有该装备返回-1
_Equipment.prototype.getRange=function(equipment){
	return this.verifyExist(equipment)?this.species[equipment].range:-1;
};
// 为this.detect统计当前物品而生
_Equipment.prototype._objectCombine=function(o1,o2){
	var res={},
		isBug=false;
	[o1,o2].forEach(function(item){
		if(!isBug)
			for(var p in item){
				var len=item[p].number;
				if(len<0){	// 添加bug检测，防止页面卡死
					isBug=true;
					console.warn(existBug+' in function _Equipment.prototype._objectCombine!');
					return;
				}
				while(item[p].number--)
					p in res?(res[p].number++,res[p].indexs.push(item[p].indexs[len-item[p].number-1])):(res[p]={number:1,indexs:[item[p].indexs[0]]});
			}
	});
	return isBug?existBug:res;
};
_Equipment.prototype._clearEmptyItem=function(array){
	if(Array.isArray(array)){
		var len=array.length;
		while(len--)
			if(array[len]===undefined)
				array.splice(len,1);
		return array;
	}else
		console.warn('function _Equipment.prototype._clearEmptyItem need an array as a parameter!');
};
// 装备检测+合成(equipments=>[装备名*n])(注：合成与放入顺序有关--两件合成物品同时需要且存在某一物品时)
_Equipment.prototype.detect=function(equipments){
	var self=this;
	if(Array.isArray(equipments)){
		var oEquipments={},
			oSynthetic={},
			res=[];
		equipments.forEach(function(item,index){
			if(self.verifyExist(item))
				if(item in oEquipments){
					oEquipments[item].number++;
					oEquipments[item].indexs.push(index);
				}else{
					oEquipments[item]={
						number:1,
						indexs:[index]
					};
					var e=self.species[item];
					if(Array.isArray(e.upgrade)&&e.upgrade.length>0)
						e.upgrade.forEach(function(itm){
							oSynthetic[itm]={
								number:0,
								indexs:[]
							};
						});
				}
		});
		var hasUpgrade=false;
		for(var p in oSynthetic){
			var e=this.species[p],
				curUpgrade=true;
			// 检测是否可升级
			var oNeeds={};
			for(var i=0,len=e.needs.length;i<len;i++){
				var need=e.needs[i];
				need in oNeeds?oNeeds[need]++:(oNeeds[need]=1);
				if(!(need in oEquipments)||oEquipments[need].number<oNeeds[need]){
					curUpgrade=false;
					break;
				}
			}
			if(curUpgrade){
				var idx=100;
				e.needs.forEach(function(item){
					oEquipments[item].number--;
					idx=Math.min(idx,oEquipments[item].indexs.splice(0,1));
				});
				oSynthetic[p].number++;
				oSynthetic[p].indexs.push(idx);
				hasUpgrade=true;
			}
		}
		var oRes=this._objectCombine(oEquipments,oSynthetic);
		if(oRes===existBug)
			return existBug;
		for(var p in oRes){
			var len=oRes[p].number;
			while(oRes[p].number--)
				res[oRes[p].indexs[len-oRes[p].number-1]]=p;
		}
		this._clearEmptyItem(res);
		return hasUpgrade?this.detect(res):res;
	}else if(typeof equipments==="string"){
		if(this.verifyExist(equipments))
			return [equipments]
	}
	return [];
};
// 拆分装备，存在返回range为0的数组合集，不存在返回undefined
_Equipment.prototype.split=function(equipment){
	var self=this;
	return this.verifyExist(equipment)?(function(){
		var res=[],
			e=self.species[equipment],
			range=e.range;
		if(range>0){
			var needs=[].concat(e.needs);
			while(range--){
				var len=needs.length;
				while(len--){
					var need=needs[len],
						eNeed=self.species[need];
					if(eNeed.range>0)
						needs=needs.concat(eNeed.needs);
					else
						res.push(need);
					needs.splice(len,1);
				}
			}
		}else
			res.push(equipment);
		return res;
	})():undefined;
}
