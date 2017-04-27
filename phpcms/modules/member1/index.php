<?php
 /**
  * 会员前台管理中心、账号管理、收藏操作类
  */
 defined('IN_PHPCMS') or exit('No permission resources.');
 pc_base::load_app_class('foreground');
 pc_base::load_sys_class('format', '', 0);
 pc_base::load_sys_class('form', '', 0);
 class index extends foreground {
 	private $times_db;
 	function __construct() {
 		parent::__construct();
 		$this->http_user_agent = $_SERVER['HTTP_USER_AGENT'];
 	}
 	public function init() {
 		$memberinfo = $this->memberinfo;
 		//初始化phpsso
 		$phpsso_api_url = $this->_init_phpsso();
 		//获取头像数组
 		$avatar = $this->client->ps_getavatar($this->memberinfo['phpssouid']);
 		$grouplist = getcache('grouplist');
 		$memberinfo['groupname'] = $grouplist[$memberinfo[groupid]]['name'];
         //获取用户模型数据
 		$this->db->set_model($this->memberinfo['modelid']);
 		$member_modelinfo_arr = $this->db->get_one(array('userid'=>$this->memberinfo['userid']));
 		$model_info = getcache('model_field_'.$this->memberinfo['modelid'], 'model');
 		//print_r($model_info);
 		foreach($model_info as $k=>$v) {
 			if($v['formtype'] == 'omnipotent') continue;
 			if($v['formtype'] == 'image') {
 				$member_modelinfo[$v['name']] = "<a href='$member_modelinfo_arr[$k]' target='_blank'><img src='$member_modelinfo_arr[$k]' height='40' widht='40' onerror=\"this.src='$phpsso_api_url/statics/images/member/nophoto.gif'\"></a>";
 			} elseif($v['formtype'] == 'datetime' && $v['fieldtype'] == 'int') {	//如果为日期字段
 				$member_modelinfo[$v['name']] = format::date($member_modelinfo_arr[$k], $v['format'] == 'Y-m-d H:i:s' ? 1 : 0);
 			} elseif($v['formtype'] == 'images') {
 				$tmp = string2array($member_modelinfo_arr[$k]);
 				$member_modelinfo[$v['name']] = '';
 				if(is_array($tmp)) {
 					foreach ($tmp as $tv) {
 						$member_modelinfo[$v['name']] .= " <a href='$tv[url]' target='_blank'><img src='$tv[url]' height='40' widht='40' onerror=\"this.src='$phpsso_api_url/statics/images/member/nophoto.gif'\"></a>";
 					}
 					unset($tmp);
 				}
 			} elseif($v['formtype'] == 'box') {	//box字段，获取字段名称和值的数组
 				$tmp = explode("\n",$v['options']);
 				if(is_array($tmp)) {
 					foreach($tmp as $boxv) {
 						$box_tmp_arr = explode('|', trim($boxv));
 						if(is_array($box_tmp_arr) && isset($box_tmp_arr[1]) && isset($box_tmp_arr[0])) {
 							$box_tmp[$box_tmp_arr[1]] = $box_tmp_arr[0];
 							$tmp_key = intval($member_modelinfo_arr[$k]);
 						}
 					}
 				}
 				if(isset($box_tmp[$tmp_key])) {
 					$member_modelinfo[$v['name']] = $box_tmp[$tmp_key];
 				} else {
 					$member_modelinfo[$v['name']] = $member_modelinfo_arr[$k];
 				}
 				unset($tmp, $tmp_key, $box_tmp, $box_tmp_arr);
 			} elseif($v['formtype'] == 'linkage') {	//如果为联动菜单
 				$tmp = string2array($v['setting']);
 				$tmpid = $tmp['linkageid'];
 				$linkagelist = getcache($tmpid, 'linkage');
 				$fullname = $this->_get_linkage_fullname($member_modelinfo_arr[$k], $linkagelist);
 				$member_modelinfo[$v['name']] = substr($fullname, 0, -1);
 				unset($tmp, $tmpid, $linkagelist, $fullname);
 			} else {
 				$member_modelinfo[$v['name']] = $member_modelinfo_arr[$k];
 			}
 		}
         /*会员详细资料*/
         /*修改资料*/
 			//获取会员模型表单
 			require CACHE_MODEL_PATH.'member_form.class.php';
 			$member_form = new member_form($this->memberinfo['modelid']);
 			$this->db->set_model($this->memberinfo['modelid']);
 			$membermodelinfo = $this->db->get_one(array('userid'=>$this->memberinfo['userid']));
 			$forminfos = $forminfos_arr = $member_form->get($membermodelinfo);
 			//万能字段过滤
 			foreach($forminfos as $field=>$info) {
 				if($info['isomnipotent']) {
 					unset($forminfos[$field]);
 				} else {
 					if($info['formtype']=='omnipotent') {
 						foreach($forminfos_arr as $_fm=>$_fm_value) {
 							if($_fm_value['isomnipotent']) {
 								$info['form'] = str_replace('{'.$_fm.'}',$_fm_value['form'], $info['form']);
 							}
 						}
 						$forminfos[$field]['form'] = $info['form'];
 					}
 				}
 			}
 			$formValidator = $member_form->formValidator;
         /*修改会员资料*/
 		include template('member', 'person');
 	}
     /*原有的   备份  没有用*/
 	public function sy() {
 		$memberinfo = $this->memberinfo;
 		//初始化phpsso
 		$phpsso_api_url = $this->_init_phpsso();
 		//获取头像数组
 		$avatar = $this->client->ps_getavatar($this->memberinfo['phpssouid']);
 		$grouplist = getcache('grouplist');
 		$memberinfo['groupname'] = $grouplist[$memberinfo[groupid]]['name'];
 		include template('member', 'index');
 	}
 	public function register() {
 		$this->_session_start();
 		//获取用户siteid
 		$siteid = isset($_REQUEST['siteid']) && trim($_REQUEST['siteid']) ? intval($_REQUEST['siteid']) : 1;
 		//定义站点id常量
 		if (!defined('SITEID')) {
 		   define('SITEID', $siteid);
 		}
 		//加载用户模块配置
 		$member_setting = getcache('member_setting');
 		if(!$member_setting['allowregister']) {
 			showmessage(L('deny_register'), 'index.php?m=member&c=index&a=login');
 		}
 		//加载短信模块配置
  		$sms_setting_arr = getcache('sms','sms');
 		$sms_setting = $sms_setting_arr[$siteid];		
 		header("Cache-control: private");
 		if(isset($_POST['dosubmit'])) {
 			/*开启手机验证 关闭注册的验证码
 			if($member_setting['enablcodecheck']=='1'){//开启验证码
 				if ((empty($_SESSION['connectid']) && $_SESSION['code'] != strtolower($_POST['code']) && $_POST['code']!==NULL) || empty($_SESSION['code'])) {
 					showmessage(L('code_error'));
 				} else {
 					$_SESSION['code'] = '';
 				}
 			}
 			*/
 			$userinfo = array();
 			$userinfo['encrypt'] = create_randomstr(6);
 			$userinfo['username'] = (isset($_POST['username']) && is_username($_POST['username'])) ? $_POST['username'] : exit('0');
 			$userinfo['nickname'] = (isset($_POST['nickname']) && is_username($_POST['nickname'])) ? $_POST['nickname'] : '';
 			$userinfo['email'] = (isset($_POST['email']) && is_email($_POST['email'])) ? $_POST['email'] : exit('0');
 			$userinfo['password'] = (isset($_POST['password']) && is_badword($_POST['password'])==false) ? $_POST['password'] : exit('0');
 			$userinfo['email'] = (isset($_POST['email']) && is_email($_POST['email'])) ? $_POST['email'] : exit('0');
 			$userinfo['modelid'] = isset($_POST['modelid']) ? intval($_POST['modelid']) : 10;
 			$userinfo['regip'] = ip();
 			$userinfo['point'] = $member_setting['defualtpoint'] ? $member_setting['defualtpoint'] : 0;
 			$userinfo['amount'] = $member_setting['defualtamount'] ? $member_setting['defualtamount'] : 0;
 			$userinfo['regdate'] = $userinfo['lastdate'] = SYS_TIME;
 			$userinfo['siteid'] = $siteid;
 			$userinfo['connectid'] = isset($_SESSION['connectid']) ? $_SESSION['connectid'] : '';
 			$userinfo['from'] = isset($_SESSION['from']) ? $_SESSION['from'] : '';
 			//手机强制验证
 			if($member_setting[mobile_checktype]=='1'){
 				//取用户手机号
 				$mobile_verify = $_POST['mobile_verify'] ? intval($_POST['mobile_verify']) : '';
 				if($mobile_verify=='') showmessage('请提供正确的手机验证码！', HTTP_REFERER);
  				$sms_report_db = pc_base::load_model('sms_report_model');
 				$posttime = SYS_TIME-360;
 				$where = "`id_code`='$mobile_verify' AND `posttime`>'$posttime'";
 				$r = $sms_report_db->get_one($where,'*','id DESC');
  				if(!empty($r)){
 					$userinfo['mobile'] = $r['mobile'];
 				}
 				//else{
 				//	showmessage('未检测到正确的手机号码！', HTTP_REFERER);
 				//}
  			}elseif($member_setting[mobile_checktype]=='2'){
 				//获取验证码，直接通过POST，取mobile值
 				$userinfo['mobile'] = isset($_POST['mobile']) ? $_POST['mobile'] : '';
 			} 
 			if($userinfo['mobile']!=""){
 				if(!preg_match('/^1([0-9]{9})/',$userinfo['mobile'])) {
 					showmessage('请提供正确的手机号码！', HTTP_REFERER);
 				}
 			} 
  			unset($_SESSION['connectid'], $_SESSION['from']);
 			if($member_setting['enablemailcheck']) {	//是否需要邮件验证
 				$userinfo['groupid'] = 7;
 			} elseif($member_setting['registerverify']) {	//是否需要管理员审核
 				$modelinfo_str = $userinfo['modelinfo'] = isset($_POST['info']) ? array2string(array_map("safe_replace", new_html_special_chars($_POST['info']))) : '';
 				$this->verify_db = pc_base::load_model('member_verify_model');
 				unset($userinfo['lastdate'],$userinfo['connectid'],$userinfo['from']);
 				$userinfo['modelinfo'] = $modelinfo_str;
 				$this->verify_db->insert($userinfo);
 				showmessage(L('operation_success'), 'index.php?m=member&c=index&a=register&t=3');
 			} else {
 				//查看当前模型是否开启了短信验证功能
 				$model_field_cache = getcache('model_field_'.$userinfo['modelid'],'model');
 				if(isset($model_field_cache['mobile']) && $model_field_cache['mobile']['disabled']==0) {
 					$mobile = $_POST['info']['mobile'];
 					if(!preg_match('/^1([0-9]{10})/',$mobile)) showmessage(L('input_right_mobile'));
 					$sms_report_db = pc_base::load_model('sms_report_model');
 					$posttime = SYS_TIME-300;
 					$where = "`mobile`='$mobile' AND `posttime`>'$posttime'";
 					$r = $sms_report_db->get_one($where);
 					if(!$r || $r['id_code']!=$_POST['mobile_verify']) showmessage(L('error_sms_code'));
 				}
 				$userinfo['groupid'] = $this->_get_usergroup_bypoint($userinfo['point']);
 			}
 			if(pc_base::load_config('system', 'phpsso')) {
 				$this->_init_phpsso();
 				$status = $this->client->ps_member_register($userinfo['username'], $userinfo['password'], $userinfo['email'], $userinfo['regip'], $userinfo['encrypt']);
 				if($status > 0) {
 					$userinfo['phpssouid'] = $status;
 					//传入phpsso为明文密码，加密后存入phpcms_v9
 					$password = $userinfo['password'];
 					$userinfo['password'] = password($userinfo['password'], $userinfo['encrypt']);
 					$userid = $this->db->insert($userinfo, 1);
 					if($member_setting['choosemodel']) {	//如果开启选择模型
 						//通过模型获取会员信息					
 						require_once CACHE_MODEL_PATH.'member_input.class.php';
 				        require_once CACHE_MODEL_PATH.'member_update.class.php';
 						$member_input = new member_input($userinfo['modelid']);
 						$_POST['info'] = array_map('new_html_special_chars',$_POST['info']);
 						$user_model_info = $member_input->get($_POST['info']);
 						$user_model_info['userid'] = $userid;
 						//插入会员模型数据
 						$this->db->set_model($userinfo['modelid']);
 						$this->db->insert($user_model_info);
 					}
 					if($userid > 0) {
 						//执行登陆操作
 						if(!$cookietime) $get_cookietime = param::get_cookie('cookietime');
 						$_cookietime = $cookietime ? intval($cookietime) : ($get_cookietime ? $get_cookietime : 0);
 						$cookietime = $_cookietime ? TIME + $_cookietime : 0;
 						if($userinfo['groupid'] == 7) {
 							param::set_cookie('_username', $userinfo['username'], $cookietime);
 							param::set_cookie('email', $userinfo['email'], $cookietime);							
 						} else {
 							$phpcms_auth_key = md5(pc_base::load_config('system', 'auth_key').$this->http_user_agent);
 							$phpcms_auth = sys_auth($userid."\t".$userinfo['password'], 'ENCODE', $phpcms_auth_key);
 							param::set_cookie('auth', $phpcms_auth, $cookietime);
 							param::set_cookie('_userid', $userid, $cookietime);
 							param::set_cookie('_username', $userinfo['username'], $cookietime);
 							param::set_cookie('_nickname', $userinfo['nickname'], $cookietime);
 							param::set_cookie('_groupid', $userinfo['groupid'], $cookietime);
 							param::set_cookie('cookietime', $_cookietime, $cookietime);
 						}
 					}
 					//如果需要邮箱认证
 					if($member_setting['enablemailcheck']) {
 						pc_base::load_sys_func('mail');
 						$phpcms_auth_key = md5(pc_base::load_config('system', 'auth_key'));
 						$code = sys_auth($userid.'|'.SYS_TIME, 'ENCODE', $phpcms_auth_key);
 						$url = APP_PATH."index.php?m=member&c=index&a=register&code=$code&verify=1";
 						$message = $member_setting['registerverifymessage'];
 						$message = str_replace(array('{click}','{url}','{username}','{email}','{password}'), array('<a href="'.$url.'">'.L('please_click').'</a>',$url,$userinfo['username'],$userinfo['email'],$password), $message);
  						sendmail($userinfo['email'], L('reg_verify_email'), $message);
 						//设置当前注册账号COOKIE，为第二步重发邮件所用
 						param::set_cookie('_regusername', $userinfo['username'], $cookietime);
 						param::set_cookie('_reguserid', $userid, $cookietime);
 						param::set_cookie('_reguseruid', $userinfo['phpssouid'], $cookietime);
 						showmessage(L('operation_success'), 'index.php?m=member&c=index&a=register&t=2');
 					} else {
 						//如果不需要邮箱认证、直接登录其他应用
 						$synloginstr = $this->client->ps_member_synlogin($userinfo['phpssouid']);
 						showmessage(L('register_success').$synloginstr, 'index.php?m=member&c=index&a=init');
 					}
 				}
 			} else {
 				showmessage(L('enable_register').L('enable_phpsso'), 'index.php');
 			}
 			showmessage(L('operation_failure'), HTTP_REFERER);
 		} else {
 			if(!pc_base::load_config('system', 'phpsso')) {
 				showmessage(L('enable_register').L('enable_phpsso'), 'index.php?m=member&c=index&a=login');
 			}
 			if(!empty($_GET['verify'])) {
 				$code = isset($_GET['code']) ? trim($_GET['code']) : showmessage(L('operation_failure'), 'index.php?m=member&c=index');
 				$phpcms_auth_key = md5(pc_base::load_config('system', 'auth_key'));
 				$code_res = sys_auth($code, 'DECODE', $phpcms_auth_key);
 				$code_arr = explode('|', $code_res);
 				$userid = isset($code_arr[0]) ? $code_arr[0] : '';
 				$userid = is_numeric($userid) ? $userid : showmessage(L('operation_failure'), 'index.php?m=member&c=index');
 				$this->db->update(array('groupid'=>$this->_get_usergroup_bypoint()), array('userid'=>$userid));
 				showmessage(L('operation_success'), 'index.php?m=member&c=index');
 			} elseif(!empty($_GET['protocol'])) {
 				include template('member', 'protocol');
 			} else {
 				//过滤非当前站点会员模型
 				$modellist = getcache('member_model', 'commons');
 				foreach($modellist as $k=>$v) {
 					if($v['siteid']!=$siteid || $v['disabled']) {
 						unset($modellist[$k]);
 					}
 				}
 				if(empty($modellist)) {
 					showmessage(L('site_have_no_model').L('deny_register'), HTTP_REFERER);
 				}
 				//是否开启选择会员模型选项
 				if($member_setting['choosemodel']) {
 					$first_model = array_pop(array_reverse($modellist));
 					$modelid = isset($_GET['modelid']) && in_array($_GET['modelid'], array_keys($modellist)) ? intval($_GET['modelid']) : $first_model['modelid'];
 					if(array_key_exists($modelid, $modellist)) {
 						//获取会员模型表单
 						require CACHE_MODEL_PATH.'member_form.class.php';
 						$member_form = new member_form($modelid);
 						$this->db->set_model($modelid);
 						$forminfos = $forminfos_arr = $member_form->get();
 						//万能字段过滤
 						foreach($forminfos as $field=>$info) {
 							if($info['isomnipotent']) {
 								unset($forminfos[$field]);
 							} else {
 								if($info['formtype']=='omnipotent') {
 									foreach($forminfos_arr as $_fm=>$_fm_value) {
 										if($_fm_value['isomnipotent']) {
 											$info['form'] = str_replace('{'.$_fm.'}',$_fm_value['form'], $info['form']);
 										}
 									}
 									$forminfos[$field]['form'] = $info['form'];
 								}
 							}
 						}
 						$formValidator = $member_form->formValidator;
 					}
 				}
 				$description = $modellist[$modelid]['description'];
 				include template('member', 'register');
 			}
 		}
 	}
  	public function zhuce() {
 		$this->_session_start();
 		//获取用户siteid
 		$siteid = isset($_REQUEST['siteid']) && trim($_REQUEST['siteid']) ? intval($_REQUEST['siteid']) : 1;
 		//定义站点id常量
 		if (!defined('SITEID')) {
 		   define('SITEID', $siteid);
 		}
 		//加载用户模块配置
 		$member_setting = getcache('member_setting');
 		if(!$member_setting['allowregister']) {
 			showmessage(L('deny_register'), 'index.php?m=member&c=index&a=login');
 		}
 		//加载短信模块配置
  		$sms_setting_arr = getcache('sms','sms');
 		$sms_setting = $sms_setting_arr[$siteid];		
 		header("Cache-control: private");
 		if(isset($_POST['dosubmit'])) {
 			if($member_setting['enablcodecheck']=='1'){//开启验证码
 				if ((empty($_SESSION['connectid']) && $_SESSION['code'] != strtolower($_POST['code']) && $_POST['code']!==NULL) || empty($_SESSION['code'])) {
 					showmessage(L('code_error'));
 				} else {
 					$_SESSION['code'] = '';
 				}
 			}
 			$userinfo = array();
 			$userinfo['encrypt'] = create_randomstr(6);
 			$userinfo['username'] = (isset($_POST['username']) && is_username($_POST['username'])) ? $_POST['username'] : exit('0');
 			$userinfo['nickname'] = (isset($_POST['nickname']) && is_username($_POST['nickname'])) ? $_POST['nickname'] : '';
 			$userinfo['email'] = (isset($_POST['email']) && is_email($_POST['email'])) ? $_POST['email'] : exit('0');
 			$userinfo['password'] = (isset($_POST['password']) && is_badword($_POST['password'])==false) ? $_POST['password'] : exit('0');
 			$userinfo['email'] = (isset($_POST['email']) && is_email($_POST['email'])) ? $_POST['email'] : exit('0');
 			$userinfo['modelid'] = isset($_POST['modelid']) ? intval($_POST['modelid']) : 10;
 			$userinfo['regip'] = ip();
 			$userinfo['point'] = $member_setting['defualtpoint'] ? $member_setting['defualtpoint'] : 0;
 			$userinfo['amount'] = $member_setting['defualtamount'] ? $member_setting['defualtamount'] : 0;
 			$userinfo['regdate'] = $userinfo['lastdate'] = SYS_TIME;
 			$userinfo['siteid'] = $siteid;
 			$userinfo['connectid'] = isset($_SESSION['connectid']) ? $_SESSION['connectid'] : '';
 			$userinfo['from'] = isset($_SESSION['from']) ? $_SESSION['from'] : '';
 			//手机强制验证
 			if($member_setting[mobile_checktype]=='1'){
 				//取用户手机号
 				$mobile_verify = $_POST['mobile_verify'] ? intval($_POST['mobile_verify']) : '';
 				if($mobile_verify=='') showmessage('请提供正确的手机验证码！', HTTP_REFERER);
  				$sms_report_db = pc_base::load_model('sms_report_model');
 				$posttime = SYS_TIME-360;
 				$where = "`id_code`='$mobile_verify' AND `posttime`>'$posttime'";
 				$r = $sms_report_db->get_one($where,'*','id DESC');
  				if(!empty($r)){
 					$userinfo['mobile'] = $r['mobile'];
 				}
 				//else{
 				//	showmessage('未检测到正确的手机号码！', HTTP_REFERER);
 				//}
  			}elseif($member_setting[mobile_checktype]=='2'){
 				//获取验证码，直接通过POST，取mobile值
 				$userinfo['mobile'] = isset($_POST['mobile']) ? $_POST['mobile'] : '';
 			} 
 			if($userinfo['mobile']!=""){
 				if(!preg_match('/^1([0-9]{9})/',$userinfo['mobile'])) {
 					showmessage('请提供正确的手机号码！', HTTP_REFERER);
 				}
 			} 
  			unset($_SESSION['connectid'], $_SESSION['from']);
 			if($member_setting['enablemailcheck']) {	//是否需要邮件验证
 				$userinfo['groupid'] = 7;
 			} elseif($member_setting['registerverify']) {	//是否需要管理员审核
 				$modelinfo_str = $userinfo['modelinfo'] = isset($_POST['info']) ? array2string(array_map("safe_replace", new_html_special_chars($_POST['info']))) : '';
 				$this->verify_db = pc_base::load_model('member_verify_model');
 				unset($userinfo['lastdate'],$userinfo['connectid'],$userinfo['from']);
 				$userinfo['modelinfo'] = $modelinfo_str;
 				$this->verify_db->insert($userinfo);
 				showmessage(L('operation_success'), 'index.php?m=member&c=index&a=register&t=3');
 			} else {
 				//查看当前模型是否开启了短信验证功能
 				$model_field_cache = getcache('model_field_'.$userinfo['modelid'],'model');
 				if(isset($model_field_cache['mobile']) && $model_field_cache['mobile']['disabled']==0) {
 					$mobile = $_POST['info']['mobile'];
 					if(!preg_match('/^1([0-9]{10})/',$mobile)) showmessage(L('input_right_mobile'));
 					$sms_report_db = pc_base::load_model('sms_report_model');
 					$posttime = SYS_TIME-300;
 					$where = "`mobile`='$mobile' AND `posttime`>'$posttime'";
 					$r = $sms_report_db->get_one($where);
 					if(!$r || $r['id_code']!=$_POST['mobile_verify']) showmessage(L('error_sms_code'));
 				}
 				$userinfo['groupid'] = $this->_get_usergroup_bypoint($userinfo['point']);
 			}
 			if(pc_base::load_config('system', 'phpsso')) {
 				$this->_init_phpsso();
 				$status = $this->client->ps_member_register($userinfo['username'], $userinfo['password'], $userinfo['email'], $userinfo['regip'], $userinfo['encrypt']);
 				if($status > 0) {
 					$userinfo['phpssouid'] = $status;
 					//传入phpsso为明文密码，加密后存入phpcms_v9
 					$password = $userinfo['password'];
 					$userinfo['password'] = password($userinfo['password'], $userinfo['encrypt']);
 					$userid = $this->db->insert($userinfo, 1);
 					if($member_setting['choosemodel']) {	//如果开启选择模型
 						//通过模型获取会员信息					
 						require_once CACHE_MODEL_PATH.'member_input.class.php';
 				        require_once CACHE_MODEL_PATH.'member_update.class.php';
 						$member_input = new member_input($userinfo['modelid']);
 						$_POST['info'] = array_map('new_html_special_chars',$_POST['info']);
 						$user_model_info = $member_input->get($_POST['info']);
 						$user_model_info['userid'] = $userid;
 						//插入会员模型数据
 						$this->db->set_model($userinfo['modelid']);
 						$this->db->insert($user_model_info);
 					}
 					if($userid > 0) {
 						//执行登陆操作
 						if(!$cookietime) $get_cookietime = param::get_cookie('cookietime');
 						$_cookietime = $cookietime ? intval($cookietime) : ($get_cookietime ? $get_cookietime : 0);
 						$cookietime = $_cookietime ? TIME + $_cookietime : 0;
 						if($userinfo['groupid'] == 7) {
 							param::set_cookie('_username', $userinfo['username'], $cookietime);
 							param::set_cookie('email', $userinfo['email'], $cookietime);							
 						} else {
 							$phpcms_auth_key = md5(pc_base::load_config('system', 'auth_key').$this->http_user_agent);
 							$phpcms_auth = sys_auth($userid."\t".$userinfo['password'], 'ENCODE', $phpcms_auth_key);
 							param::set_cookie('auth', $phpcms_auth, $cookietime);
 							param::set_cookie('_userid', $userid, $cookietime);
 							param::set_cookie('_username', $userinfo['username'], $cookietime);
 							param::set_cookie('_nickname', $userinfo['nickname'], $cookietime);
 							param::set_cookie('_groupid', $userinfo['groupid'], $cookietime);
 							param::set_cookie('cookietime', $_cookietime, $cookietime);
 						}
 					}
 					//如果需要邮箱认证
 					if($member_setting['enablemailcheck']) {
 						pc_base::load_sys_func('mail');
 						$phpcms_auth_key = md5(pc_base::load_config('system', 'auth_key'));
 						$code = sys_auth($userid.'|'.SYS_TIME, 'ENCODE', $phpcms_auth_key);
 						$url = APP_PATH."index.php?m=member&c=index&a=register&code=$code&verify=1";
 						$message = $member_setting['registerverifymessage'];
 						$message = str_replace(array('{click}','{url}','{username}','{email}','{password}'), array('<a href="'.$url.'">'.L('please_click').'</a>',$url,$userinfo['username'],$userinfo['email'],$password), $message);
  						sendmail($userinfo['email'], L('reg_verify_email'), $message);
 						//设置当前注册账号COOKIE，为第二步重发邮件所用
 						param::set_cookie('_regusername', $userinfo['username'], $cookietime);
 						param::set_cookie('_reguserid', $userid, $cookietime);
 						param::set_cookie('_reguseruid', $userinfo['phpssouid'], $cookietime);
 						showmessage(L('operation_success'), 'index.php?m=member&c=index&a=register&t=2');
 					} else {
 						//如果不需要邮箱认证、直接登录其他应用
 						$synloginstr = $this->client->ps_member_synlogin($userinfo['phpssouid']);
 						showmessage(L('operation_success').$synloginstr, 'index.php?m=member&c=index&a=init');
 					}
 				}
 			} else {
 				showmessage(L('enable_register').L('enable_phpsso'), 'index.php?m=member&c=index&a=login');
 			}
 			showmessage(L('operation_failure'), HTTP_REFERER);
 		} else {
 			if(!pc_base::load_config('system', 'phpsso')) {
 				showmessage(L('enable_register').L('enable_phpsso'), 'index.php?m=member&c=index&a=login');
 			}
 			if(!empty($_GET['verify'])) {
 				$code = isset($_GET['code']) ? trim($_GET['code']) : showmessage(L('operation_failure'), 'index.php?m=member&c=index');
 				$phpcms_auth_key = md5(pc_base::load_config('system', 'auth_key'));
 				$code_res = sys_auth($code, 'DECODE', $phpcms_auth_key);
 				$code_arr = explode('|', $code_res);
 				$userid = isset($code_arr[0]) ? $code_arr[0] : '';
 				$userid = is_numeric($userid) ? $userid : showmessage(L('operation_failure'), 'index.php?m=member&c=index');
 				$this->db->update(array('groupid'=>$this->_get_usergroup_bypoint()), array('userid'=>$userid));
 				showmessage(L('operation_success'), 'index.php?m=member&c=index');
 			} elseif(!empty($_GET['protocol'])) {
 				include template('member', 'protocol');
 			} else {
 				//过滤非当前站点会员模型
 				$modellist = getcache('member_model', 'commons');
 				foreach($modellist as $k=>$v) {
 					if($v['siteid']!=$siteid || $v['disabled']) {
 						unset($modellist[$k]);
 					}
 				}
 				if(empty($modellist)) {
 					showmessage(L('site_have_no_model').L('deny_register'), HTTP_REFERER);
 				}
 				//是否开启选择会员模型选项
 				if($member_setting['choosemodel']) {
 					$first_model = array_pop(array_reverse($modellist));
 					$modelid = isset($_GET['modelid']) && in_array($_GET['modelid'], array_keys($modellist)) ? intval($_GET['modelid']) : $first_model['modelid'];
 					if(array_key_exists($modelid, $modellist)) {
 						//获取会员模型表单
 						require CACHE_MODEL_PATH.'member_form.class.php';
 						$member_form = new member_form($modelid);
 						$this->db->set_model($modelid);
 						$forminfos = $forminfos_arr = $member_form->get();
 						//万能字段过滤
 						foreach($forminfos as $field=>$info) {
 							if($info['isomnipotent']) {
 								unset($forminfos[$field]);
 							} else {
 								if($info['formtype']=='omnipotent') {
 									foreach($forminfos_arr as $_fm=>$_fm_value) {
 										if($_fm_value['isomnipotent']) {
 											$info['form'] = str_replace('{'.$_fm.'}',$_fm_value['form'], $info['form']);
 										}
 									}
 									$forminfos[$field]['form'] = $info['form'];
 								}
 							}
 						}
 						$formValidator = $member_form->formValidator;
 					}
 				}
 				$description = $modellist[$modelid]['description'];
 				include template('member', 'register1');
 			}
 		}
 	}
 	/*
 	 * 测试邮件配置
 	 */
 	public function send_newmail() {
 		$_username = param::get_cookie('_regusername');
 		$_userid = param::get_cookie('_reguserid');
 		$_ssouid = param::get_cookie('_reguseruid');
 		$newemail = $_GET['newemail'];
 		if($newemail==''){//邮箱为空，直接返回错误
 			return '2';
 		}
 		$this->_init_phpsso();
 		$status = $this->client->ps_checkemail($newemail);
 		if($status=='-5'){//邮箱被占用
 			exit('-1');
 		}
 		if ($status==-1) {
 			$status = $this->client->ps_get_member_info($newemail, 3);
 			if($status) {
 				$status = unserialize($status);	//接口返回序列化，进行判断
 				if (!isset($status['uid']) || $status['uid'] != intval($_ssouid)) {
 					exit('-1');
 				}
 			} else {
 				exit('-1');
 			}
 		}
 		//验证邮箱格式
 		pc_base::load_sys_func('mail');
 		$phpcms_auth_key = md5(pc_base::load_config('system', 'auth_key'));
 		$code = sys_auth($userid.'|'.SYS_TIME, 'ENCODE', $phpcms_auth_key);
 		$url = APP_PATH."index.php?m=member&c=index&a=register&code=$code&verify=1";
 		//读取配置获取验证信息
 		$member_setting = getcache('member_setting');
 		$message = $member_setting['registerverifymessage'];
 		$message = str_replace(array('{click}','{url}','{username}','{email}','{password}'), array('<a href="'.$url.'">'.L('please_click').'</a>',$url,$_username,$newemail,$password), $message);
  		if(sendmail($newemail, L('reg_verify_email'), $message)){
 			//更新新的邮箱，用来验证
  			$this->db->update(array('email'=>$newemail), array('userid'=>$_userid));
 			$this->client->ps_member_edit($_username, $newemail, '', '', $_ssouid);
 			$return = '1';
 		}else{
 			$return = '2';
 		}
 		echo $return;
    	}
 	public function account_manage() {
 		$memberinfo = $this->memberinfo;
 		//初始化phpsso
 		$phpsso_api_url = $this->_init_phpsso();
 		//获取头像数组
 		$avatar = $this->client->ps_getavatar($this->memberinfo['phpssouid']);
 		$grouplist = getcache('grouplist');
 		$member_model = getcache('member_model', 'commons');
 		//获取用户模型数据
 		$this->db->set_model($this->memberinfo['modelid']);
 		$member_modelinfo_arr = $this->db->get_one(array('userid'=>$this->memberinfo['userid']));
 		$model_info = getcache('model_field_'.$this->memberinfo['modelid'], 'model');
 		foreach($model_info as $k=>$v) {
 			if($v['formtype'] == 'omnipotent') continue;
 			if($v['formtype'] == 'image') {
 				$member_modelinfo[$v['name']] = "<a href='$member_modelinfo_arr[$k]' target='_blank'><img src='$member_modelinfo_arr[$k]' height='40' widht='40' onerror=\"this.src='$phpsso_api_url/statics/images/member/nophoto.gif'\"></a>";
 			} elseif($v['formtype'] == 'datetime' && $v['fieldtype'] == 'int') {	//如果为日期字段
 				$member_modelinfo[$v['name']] = format::date($member_modelinfo_arr[$k], $v['format'] == 'Y-m-d H:i:s' ? 1 : 0);
 			} elseif($v['formtype'] == 'images') {
 				$tmp = string2array($member_modelinfo_arr[$k]);
 				$member_modelinfo[$v['name']] = '';
 				if(is_array($tmp)) {
 					foreach ($tmp as $tv) {
 						$member_modelinfo[$v['name']] .= " <a href='$tv[url]' target='_blank'><img src='$tv[url]' height='40' widht='40' onerror=\"this.src='$phpsso_api_url/statics/images/member/nophoto.gif'\"></a>";
 					}
 					unset($tmp);
 				}
 			} elseif($v['formtype'] == 'box') {	//box字段，获取字段名称和值的数组
 				$tmp = explode("\n",$v['options']);
 				if(is_array($tmp)) {
 					foreach($tmp as $boxv) {
 						$box_tmp_arr = explode('|', trim($boxv));
 						if(is_array($box_tmp_arr) && isset($box_tmp_arr[1]) && isset($box_tmp_arr[0])) {
 							$box_tmp[$box_tmp_arr[1]] = $box_tmp_arr[0];
 							$tmp_key = intval($member_modelinfo_arr[$k]);
 						}
 					}
 				}
 				if(isset($box_tmp[$tmp_key])) {
 					$member_modelinfo[$v['name']] = $box_tmp[$tmp_key];
 				} else {
 					$member_modelinfo[$v['name']] = $member_modelinfo_arr[$k];
 				}
 				unset($tmp, $tmp_key, $box_tmp, $box_tmp_arr);
 			} elseif($v['formtype'] == 'linkage') {	//如果为联动菜单
 				$tmp = string2array($v['setting']);
 				$tmpid = $tmp['linkageid'];
 				$linkagelist = getcache($tmpid, 'linkage');
 				$fullname = $this->_get_linkage_fullname($member_modelinfo_arr[$k], $linkagelist);
 				$member_modelinfo[$v['name']] = substr($fullname, 0, -1);
 				unset($tmp, $tmpid, $linkagelist, $fullname);
 			} else {
 				$member_modelinfo[$v['name']] = $member_modelinfo_arr[$k];
 			}
 		}
 		include template('member', 'account_manage');
 	}
 	public function account_manage_avatar() {
 		$memberinfo = $this->memberinfo;
 		//初始化phpsso
 		$phpsso_api_url = $this->_init_phpsso();
 		$ps_auth_key = pc_base::load_config('system', 'phpsso_auth_key');
 		$auth_data = $this->client->auth_data(array('uid'=>$this->memberinfo['phpssouid'], 'ps_auth_key'=>$ps_auth_key), '', $ps_auth_key);
 		$upurl = base64_encode($phpsso_api_url.'/index.php?m=phpsso&c=index&a=uploadavatar&auth_data='.$auth_data);
 		//获取头像数组
 		$avatar = $this->client->ps_getavatar($this->memberinfo['phpssouid']);
 		include template('member', 'person_logo');
 	}
 	public function account_manage_security() {
 		$memberinfo = $this->memberinfo;
 		include template('member', 'account_manage_security');
 	}
 	public function account_manage_info() {
 		if(isset($_POST['dosubmit'])) {
 			//更新用户昵称
 			$nickname = isset($_POST['nickname']) && is_username(trim($_POST['nickname'])) ? trim($_POST['nickname']) : '';
 			$nickname = safe_replace($nickname);
 			if($nickname) {
 				$this->db->update(array('nickname'=>$nickname), array('userid'=>$this->memberinfo['userid']));
 				if(!isset($cookietime)) {
 					$get_cookietime = param::get_cookie('cookietime');
 				}
 				$_cookietime = $cookietime ? intval($cookietime) : ($get_cookietime ? $get_cookietime : 0);
 				$cookietime = $_cookietime ? TIME + $_cookietime : 0;
 				param::set_cookie('_nickname', $nickname, $cookietime);
 			}
 			require_once CACHE_MODEL_PATH.'member_input.class.php';
 			require_once CACHE_MODEL_PATH.'member_update.class.php';
 			$member_input = new member_input($this->memberinfo['modelid']);
 			$modelinfo = $member_input->get($_POST['info']);
 			$this->db->set_model($this->memberinfo['modelid']);
 			$membermodelinfo = $this->db->get_one(array('userid'=>$this->memberinfo['userid']));
 			if(!empty($membermodelinfo)) {
 				$this->db->update($modelinfo, array('userid'=>$this->memberinfo['userid']));
 			} else {
 				$modelinfo['userid'] = $this->memberinfo['userid'];
 				$this->db->insert($modelinfo);
 			}
 			showmessage(L('operation_success'), HTTP_REFERER);
 		} else {
 			$memberinfo = $this->memberinfo;
 			//获取会员模型表单
 			require CACHE_MODEL_PATH.'member_form.class.php';
 			$member_form = new member_form($this->memberinfo['modelid']);
 			$this->db->set_model($this->memberinfo['modelid']);
 			$membermodelinfo = $this->db->get_one(array('userid'=>$this->memberinfo['userid']));
 			$forminfos = $forminfos_arr = $member_form->get($membermodelinfo);
 			//万能字段过滤
 			foreach($forminfos as $field=>$info) {
 				if($info['isomnipotent']) {
 					unset($forminfos[$field]);
 				} else {
 					if($info['formtype']=='omnipotent') {
 						foreach($forminfos_arr as $_fm=>$_fm_value) {
 							if($_fm_value['isomnipotent']) {
 								$info['form'] = str_replace('{'.$_fm.'}',$_fm_value['form'], $info['form']);
 							}
 						}
 						$forminfos[$field]['form'] = $info['form'];
 					}
 				}
 			}
 			$formValidator = $member_form->formValidator;
 			include template('member', 'account_manage_info');
 		}
 	}
 	public function account_manage_password() {
 		if(isset($_POST['dosubmit'])) {
 			$updateinfo = array();
 			if(!is_password($_POST['info']['password'])) {
 				showmessage(L('password_format_incorrect'), HTTP_REFERER);
 			}
 			if($this->memberinfo['password'] != password($_POST['info']['password'], $this->memberinfo['encrypt'])) {
 				showmessage(L('old_password_incorrect'), HTTP_REFERER);
 			}
 			//修改会员邮箱
 			if($this->memberinfo['email'] != $_POST['info']['email'] && is_email($_POST['info']['email'])) {
 				$email = $_POST['info']['email'];
 				$updateinfo['email'] = $_POST['info']['email'];
 			} else {
 				$email = '';
 			}
 			$newpassword = password($_POST['info']['newpassword'], $this->memberinfo['encrypt']);
 			$updateinfo['password'] = $newpassword;
 			$this->db->update($updateinfo, array('userid'=>$this->memberinfo['userid']));
 			if(pc_base::load_config('system', 'phpsso')) {
 				//初始化phpsso
 				$this->_init_phpsso();
 				$res = $this->client->ps_member_edit('', $email, $_POST['info']['password'], $_POST['info']['newpassword'], $this->memberinfo['phpssouid'], $this->memberinfo['encrypt']);
 				$message_error = array('-1'=>L('user_not_exist'), '-2'=>L('old_password_incorrect'), '-3'=>L('email_already_exist'), '-4'=>L('email_error'), '-5'=>L('param_error'));
 				if ($res < 0) showmessage($message_error[$res]);
 			}
 			showmessage(L('operation_success'), HTTP_REFERER);
 		} else {
 			$show_validator = true;
 			$memberinfo = $this->memberinfo;
 			include template('member', 'account_manage_password');
 		}
 	}
 	//更换手机号码
 	public function account_change_mobile() {
 		$memberinfo = $this->memberinfo;
 		if(isset($_POST['dosubmit'])) {
 			if(!is_password($_POST['password'])) {
 				showmessage(L('password_format_incorrect'), HTTP_REFERER);
 			}
 			if($this->memberinfo['password'] != password($_POST['password'], $this->memberinfo['encrypt'])) {
 				showmessage(L('old_password_incorrect'));
 			}
 			$sms_report_db = pc_base::load_model('sms_report_model');
 			$mobile_verify = $_POST['mobile_verify'];
 			$mobile = $_POST['mobile'];
 			if($mobile){
 				if(!preg_match('/^1([0-9]{10})$/',$mobile)) exit('check phone error');
 				$posttime = SYS_TIME-600;
 				$where = "`mobile`='$mobile' AND `send_userid`='".$memberinfo['userid']."' AND `posttime`>'$posttime'";
 				$r = $sms_report_db->get_one($where,'id,id_code','id DESC');
 				if($r && $r['id_code']==$mobile_verify) {
 					$sms_report_db->update(array('id_code'=>''),$where);
 					$this->db->update(array('mobile'=>$mobile),array('userid'=>$memberinfo['userid']));
 					showmessage("手机号码更新成功！",'?m=member&c=index&a=account_change_mobile&t=1');
 				} else {
 					showmessage("短信验证码错误！请重新获取！");
 				}
 			}else{
 				showmessage("短信验证码已过期！请重新获取！");
 			}
 		} else {
 			include template('member', 'account_change_mobile');
 		}
 	}
 	//选择密码找回方式
 	public function public_get_password_type() {
 		$siteid = intval($_GET['siteid']);
 		include template('member', 'get_password_type');
 	}
 	public function account_manage_upgrade() {
 		$memberinfo = $this->memberinfo;
 		$grouplist = getcache('grouplist');
 		if(empty($grouplist[$memberinfo['groupid']]['allowupgrade'])) {
 			showmessage(L('deny_upgrade'), HTTP_REFERER);
 		}
 		if(isset($_POST['upgrade_type']) && intval($_POST['upgrade_type']) < 0) {
 			showmessage(L('operation_failure'), HTTP_REFERER);
 		}
 		if(isset($_POST['upgrade_date']) && intval($_POST['upgrade_date']) < 0) {
 			showmessage(L('operation_failure'), HTTP_REFERER);
 		}
 		if(isset($_POST['dosubmit'])) {
 			$groupid = isset($_POST['groupid']) ? intval($_POST['groupid']) : showmessage(L('operation_failure'), HTTP_REFERER);
 			$upgrade_type = isset($_POST['upgrade_type']) ? intval($_POST['upgrade_type']) : showmessage(L('operation_failure'), HTTP_REFERER);
 			$upgrade_date = !empty($_POST['upgrade_date']) ? intval($_POST['upgrade_date']) : showmessage(L('operation_failure'), HTTP_REFERER);
 			//消费类型，包年、包月、包日，价格
 			$typearr = array($grouplist[$groupid]['price_y'], $grouplist[$groupid]['price_m'], $grouplist[$groupid]['price_d']);
 			//消费类型，包年、包月、包日，时间
 			$typedatearr = array('366', '31', '1');
 			//消费的价格
 			$cost = $typearr[$upgrade_type]*$upgrade_date;
 			//购买时间
 			$buydate = $typedatearr[$upgrade_type]*$upgrade_date*86400;
 			$overduedate = $memberinfo['overduedate'] > SYS_TIME ? ($memberinfo['overduedate']+$buydate) : (SYS_TIME+$buydate);
 			if($memberinfo['amount'] >= $cost) {
 				$this->db->update(array('groupid'=>$groupid, 'overduedate'=>$overduedate, 'vip'=>1), array('userid'=>$memberinfo['userid']));
 				//消费记录
 				pc_base::load_app_class('spend','pay',0);
 				spend::amount($cost, L('allowupgrade'), $memberinfo['userid'], $memberinfo['username']);
 				showmessage(L('operation_success'), 'index.php?m=member&c=index&a=init');
 			} else {
 				showmessage(L('operation_failure'), HTTP_REFERER);
 			}
 		} else {
 			$groupid = isset($_GET['groupid']) ? intval($_GET['groupid']) : '';
 			//初始化phpsso
 			$phpsso_api_url = $this->_init_phpsso();
 			//获取头像数组
 			$avatar = $this->client->ps_getavatar($this->memberinfo['phpssouid']);
 			$memberinfo['groupname'] = $grouplist[$memberinfo[groupid]]['name'];
 			$memberinfo['grouppoint'] = $grouplist[$memberinfo[groupid]]['point'];
 			unset($grouplist[$memberinfo['groupid']]);
 			include template('member', 'account_manage_upgrade');
 		}
 	}
 	public function login() {
 		$this->_session_start();
 		//获取用户siteid
 		$siteid = isset($_REQUEST['siteid']) && trim($_REQUEST['siteid']) ? intval($_REQUEST['siteid']) : 1;
 		//定义站点id常量
 		if (!defined('SITEID')) {
 		   define('SITEID', $siteid);
 		}
 		if(isset($_POST['dosubmit'])) {
 			/*if(empty($_SESSION['connectid'])) {
 				//判断验证码
 				$code = isset($_POST['code']) && trim($_POST['code']) ? trim($_POST['code']) : showmessage(L('input_code'), HTTP_REFERER);
 				if ($_SESSION['code'] != strtolower($code)) {
 					showmessage(L('code_error'), HTTP_REFERER);
 				}
 			}
 			*/
 			$username = isset($_POST['username']) ? trim($_POST['username']) : showmessage(L('username_empty'), HTTP_REFERER);
 			$password = isset($_POST['password']) && trim($_POST['password']) ? trim($_POST['password']) : showmessage(L('password_empty'), HTTP_REFERER);
 			$cookietime = intval($_POST['cookietime']);
 			$synloginstr = ''; //同步登陆js代码
 			if(is_email($username)){
 				$member_info = $this->db->get_one(array('email'=>$username));
 				if(!$member_info) {
 				$username = isset($_POST['username']) && is_username($_POST['username']) ? trim($_POST['username']) : showmessage(L('username_empty'), HTTP_REFERER);
 				}else{
 				$username =$member_info['username'];
 				}
 			}else{
 				$member_info = $this->db->get_one(array('mobile'=>$username));
 				if(!$member_info) {
 				$username = isset($_POST['username']) && is_username($_POST['username']) ? trim($_POST['username']) : showmessage(L('username_empty'), HTTP_REFERER);
 				}else{
 				$username =$member_info['username'];
 				}
 			}
 			if(pc_base::load_config('system', 'phpsso')) {
 				$this->_init_phpsso();
 				$status = $this->client->ps_member_login($username, $password);
 				$memberinfo = unserialize($status);
 				if(isset($memberinfo['uid'])) {
 					//查询帐号
 					$r = $this->db->get_one(array('phpssouid'=>$memberinfo['uid']));
 					if(!$r) {
 						//插入会员详细信息，会员不存在 插入会员
 						$info = array(
 									'phpssouid'=>$memberinfo['uid'],
 						 			'username'=>$memberinfo['username'],
 						 			'password'=>$memberinfo['password'],
 						 			'encrypt'=>$memberinfo['random'],
 						 			'email'=>$memberinfo['email'],
 						 			'regip'=>$memberinfo['regip'],
 						 			'regdate'=>$memberinfo['regdate'],
 						 			'lastip'=>$memberinfo['lastip'],
 						 			'lastdate'=>$memberinfo['lastdate'],
 						 			'groupid'=>$this->_get_usergroup_bypoint(),	//会员默认组
 						 			'modelid'=>10,	//普通会员
 									);
 						//如果是connect用户
 						if(!empty($_SESSION['connectid'])) {
 							$userinfo['connectid'] = $_SESSION['connectid'];
 						}
 						if(!empty($_SESSION['from'])) {
 							$userinfo['from'] = $_SESSION['from'];
 						}
 						unset($_SESSION['connectid'], $_SESSION['from']);
 						$this->db->insert($info);
 						unset($info);
 						$r = $this->db->get_one(array('phpssouid'=>$memberinfo['uid']));
 					}
 					$password = $r['password'];
 					$synloginstr = $this->client->ps_member_synlogin($r['phpssouid']);
  				} else {
 					if($status == -1) {	//用户不存在
 						showmessage(L('user_not_exist'), 'index.php');
 					} elseif($status == -2) { //密码错误
 						showmessage(L('password_error'), 'index.php');
 					} else {
 						showmessage(L('login_failure'), 'index.php');
 					}
 				}
 			} else {
 				//密码错误剩余重试次数
 				$this->times_db = pc_base::load_model('times_model');
 				$rtime = $this->times_db->get_one(array('username'=>$username));
 				if($rtime['times'] > 4) {
 					$minute = 60 - floor((SYS_TIME - $rtime['logintime']) / 60);
 					showmessage(L('wait_1_hour', array('minute'=>$minute)));
 				}
 				//查询帐号
 				$r = $this->db->get_one(array('username'=>$username));
 				if(!$r) showmessage(L('user_not_exist'),'index.php');
 				//验证用户密码
 				$password = md5(md5(trim($password)).$r['encrypt']);
 				if($r['password'] != $password) {				
 					$ip = ip();
 					if($rtime && $rtime['times'] < 5) {
 						$times = 5 - intval($rtime['times']);
 						$this->times_db->update(array('ip'=>$ip, 'times'=>'+=1'), array('username'=>$username));
 					} else {
 						$this->times_db->insert(array('username'=>$username, 'ip'=>$ip, 'logintime'=>SYS_TIME, 'times'=>1));
 						$times = 5;
 					}
 					showmessage(L('password_error', array('times'=>$times)), 'index.php', 3000);
 				}
 				$this->times_db->delete(array('username'=>$username));
 			}
 			//如果用户被锁定
 			if($r['islock']) {
 				showmessage(L('user_is_lock'));
 			}
 			$userid = $r['userid'];
 			$groupid = $r['groupid'];
 			$username = $r['username'];
 			$nickname = empty($r['nickname']) ? $username : $r['nickname'];
 			$updatearr = array('lastip'=>ip(), 'lastdate'=>SYS_TIME);
 			//vip过期，更新vip和会员组
 			if($r['overduedate'] < SYS_TIME) {
 				$updatearr['vip'] = 0;
 			}		
 			//检查用户积分，更新新用户组，除去邮箱认证、禁止访问、游客组用户、vip用户，如果该用户组不允许自助升级则不进行该操作		
 			if($r['point'] >= 0 && !in_array($r['groupid'], array('1', '7', '8')) && empty($r[vip])) {
 				$grouplist = getcache('grouplist');
 				if(!empty($grouplist[$r['groupid']]['allowupgrade'])) {	
 					$check_groupid = $this->_get_usergroup_bypoint($r['point']);
 					if($check_groupid != $r['groupid']) {
 						$updatearr['groupid'] = $groupid = $check_groupid;
 					}
 				}
 			}
 			//如果是connect用户
 			if(!empty($_SESSION['connectid'])) {
 				$updatearr['connectid'] = $_SESSION['connectid'];
 			}
 			if(!empty($_SESSION['from'])) {
 				$updatearr['from'] = $_SESSION['from'];
 			}
 			unset($_SESSION['connectid'], $_SESSION['from']);
 			$this->db->update($updatearr, array('userid'=>$userid));
 			if(!isset($cookietime)) {
 				$get_cookietime = param::get_cookie('cookietime');
 			}
 			$_cookietime = $cookietime ? intval($cookietime) : ($get_cookietime ? $get_cookietime : 0);
 			$cookietime = $_cookietime ? SYS_TIME + $_cookietime : 0;
 			$phpcms_auth_key = md5(pc_base::load_config('system', 'auth_key').$this->http_user_agent);
 			$phpcms_auth = sys_auth($userid."\t".$password, 'ENCODE', $phpcms_auth_key);
 			param::set_cookie('auth', $phpcms_auth, $cookietime);
 			param::set_cookie('_userid', $userid, $cookietime);
 			param::set_cookie('_username', $username, $cookietime);
 			param::set_cookie('_groupid', $groupid, $cookietime);
 			param::set_cookie('_nickname', $nickname, $cookietime);
 			//param::set_cookie('cookietime', $_cookietime, $cookietime);
 			$forward = isset($_POST['forward']) && !empty($_POST['forward']) ? urldecode($_POST['forward']) : 'index.php?m=member&c=index';
 			showmessage(L('login_success'), $forward);
 		} else {
 			$setting = pc_base::load_config('system');
 			$forward = isset($_GET['forward']) && trim($_GET['forward']) ? urlencode($_GET['forward']) : '';
 			$siteid = isset($_REQUEST['siteid']) && trim($_REQUEST['siteid']) ? intval($_REQUEST['siteid']) : 1;
 			$siteinfo = siteinfo($siteid);
 			include template('member', 'login');
 		}
 	}
 	public function logout() {
 		$setting = pc_base::load_config('system');
 		//snda退出
 		if($setting['snda_enable'] && param::get_cookie('_from')=='snda') {
 			param::set_cookie('_from', '');
 			$forward = isset($_GET['forward']) && trim($_GET['forward']) ? urlencode($_GET['forward']) : '';
 			$logouturl = 'https://cas.sdo.com/cas/logout?url='.urlencode(APP_PATH.'index.php?m=member&c=index&a=logout&forward='.$forward);
 			header('Location: '.$logouturl);
 		} else {
 			$synlogoutstr = '';	//同步退出js代码
 			if(pc_base::load_config('system', 'phpsso')) {
 				$this->_init_phpsso();
 				$synlogoutstr = $this->client->ps_member_synlogout();			
 			}
 			param::set_cookie('auth', '');
 			param::set_cookie('_userid', '');
 			param::set_cookie('_username', '');
 			param::set_cookie('_groupid', '');
 			param::set_cookie('_nickname', '');
 			param::set_cookie('cookietime', '');
 			$forward = isset($_GET['forward']) && trim($_GET['forward']) ? $_GET['forward'] : 'index.php';
 			showmessage(L('logout_success'),'/index.php');
 		}
 	}
 	/**
 	 * 我的收藏
 	 * 
 	 */
 	public function favorite() {
 		$this->favorite_db = pc_base::load_model('favorite_model');
 		$memberinfo = $this->memberinfo;
 		if(isset($_GET['id']) && trim($_GET['id'])) {
 			$this->favorite_db->delete(array('userid'=>$memberinfo['userid'], 'id'=>intval($_GET['id'])));
 			showmessage(L('operation_success'), HTTP_REFERER);
 		} else {
 			$page = isset($_GET['page']) && trim($_GET['page']) ? intval($_GET['page']) : 1;
 			$favoritelist = $this->favorite_db->listinfo(array('userid'=>$memberinfo['userid']), 'id DESC', $page, 10);
 			$pages = $this->favorite_db->pages;
 			include template('member', 'favorite_list');
 		}
 	}
 	/**
 	 * 我的好友
 	 */
 	public function friend() {
 		$memberinfo = $this->memberinfo;
 		$this->friend_db = pc_base::load_model('friend_model');
 		if(isset($_GET['friendid'])) {
 			$this->friend_db->delete(array('userid'=>$memberinfo['userid'], 'friendid'=>intval($_GET['friendid'])));
 			showmessage(L('operation_success'), HTTP_REFERER);
 		} else {
 			//初始化phpsso
 			$phpsso_api_url = $this->_init_phpsso();
 			//我的好友列表userid
 			$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
 			$friendids = $this->friend_db->listinfo(array('userid'=>$memberinfo['userid']), '', $page, 10);
 			$pages = $this->friend_db->pages;
 			foreach($friendids as $k=>$v) {
 				$friendlist[$k]['friendid'] = $v['friendid'];
 				$friendlist[$k]['avatar'] = $this->client->ps_getavatar($v['phpssouid']);
 				$friendlist[$k]['is'] = $v['is'];
 			}
 			include template('member', 'friend_list');
 		}
 	}
 	/**
 	 * 积分兑换
 	 */
 	public function change_credit() {
 		$memberinfo = $this->memberinfo;
 		//加载用户模块配置
 		$member_setting = getcache('member_setting');
 		$this->_init_phpsso();
 		$setting = $this->client->ps_getcreditlist();
 		$outcredit = unserialize($setting);
 		$setting = $this->client->ps_getapplist();
 		$applist = unserialize($setting);
 		if(isset($_POST['dosubmit'])) {
 			//本系统积分兑换数
 			$fromvalue = intval($_POST['fromvalue']);
 			//本系统积分类型
 			$from = $_POST['from'];
 			$toappid_to = explode('_', $_POST['to']);
 			//目标系统appid
 			$toappid = $toappid_to[0];
 			//目标系统积分类型
 			$to = $toappid_to[1];
 			if($from == 1) {
 				if($memberinfo['point'] < $fromvalue) {
 					showmessage(L('need_more_point'), HTTP_REFERER);
 				}
 			} elseif($from == 2) {
 				if($memberinfo['amount'] < $fromvalue) {
 					showmessage(L('need_more_amount'), HTTP_REFERER);
 				}
 			} else {
 				showmessage(L('credit_setting_error'), HTTP_REFERER);
 			}
 			$status = $this->client->ps_changecredit($memberinfo['phpssouid'], $from, $toappid, $to, $fromvalue);
 			if($status == 1) {
 				if($from == 1) {
 					$this->db->update(array('point'=>"-=$fromvalue"), array('userid'=>$memberinfo['userid']));
 				} elseif($from == 2) {
 					$this->db->update(array('amount'=>"-=$fromvalue"), array('userid'=>$memberinfo['userid']));
 				}
 				showmessage(L('operation_success'), HTTP_REFERER);
 			} else {
 				showmessage(L('operation_failure'), HTTP_REFERER);
 			}
 		} elseif(isset($_POST['buy'])) {
 			if(!is_numeric($_POST['money']) || $_POST['money'] < 0) {
 				showmessage(L('money_error'), HTTP_REFERER);
 			} else {
 				$money = intval($_POST['money']);
 			}
 			if($memberinfo['amount'] < $money) {
 				showmessage(L('short_of_money'), HTTP_REFERER);
 			}
 			//此处比率读取用户配置
 			$point = $money*$member_setting['rmb_point_rate'];
 			$this->db->update(array('point'=>"+=$point"), array('userid'=>$memberinfo['userid']));
 			//加入消费记录，同时扣除金钱
 			pc_base::load_app_class('spend','pay',0);
 			spend::amount($money, L('buy_point'), $memberinfo['userid'], $memberinfo['username']);
 			showmessage(L('operation_success'), HTTP_REFERER);
 		} else {
 			$credit_list = pc_base::load_config('credit');
 			include template('member', 'change_credit');
 		}
 	}
 	//mini登陆条
 	public function mini() {
 		$_username = param::get_cookie('_username');
 		$_userid = param::get_cookie('_userid');
 		$siteid = isset($_GET['siteid']) ? intval($_GET['siteid']) : '';
 		//定义站点id常量
 		if (!defined('SITEID')) {
 		   define('SITEID', $siteid);
 		}
 		$snda_enable = pc_base::load_config('system', 'snda_enable');
 		include template('member', 'mini');
 	}
 	/**
 	 * 初始化phpsso
 	 * about phpsso, include client and client configure
 	 * @return string phpsso_api_url phpsso地址
 	 */
 	private function _init_phpsso() {
 		pc_base::load_app_class('client', '', 0);
 		define('APPID', pc_base::load_config('system', 'phpsso_appid'));
 		$phpsso_api_url = pc_base::load_config('system', 'phpsso_api_url');
 		$phpsso_auth_key = pc_base::load_config('system', 'phpsso_auth_key');
 		$this->client = new client($phpsso_api_url, $phpsso_auth_key);
 		return $phpsso_api_url;
 	}
 	protected function _checkname($username) {
 		$username =  trim($username);
 		if ($this->db->get_one(array('username'=>$username))){
 			return false;
 		}
 		return true;
 	}
 	private function _session_start() {
 		$session_storage = 'session_'.pc_base::load_config('system','session_storage');
 		pc_base::load_sys_class($session_storage);
 	}
 	/*
 	 * 通过linkageid获取名字路径
 	 */
 	protected function _get_linkage_fullname($linkageid,  $linkagelist) {
 		$fullname = '';
 		if($linkagelist['data'][$linkageid]['parentid'] != 0) {
 			$fullname = $this->_get_linkage_fullname($linkagelist['data'][$linkageid]['parentid'], $linkagelist);
 		}
 		//所在地区名称
 		$return = $fullname.$linkagelist['data'][$linkageid]['name'].'>';
 		return $return;
 	}
 	/**
 	 *根据积分算出用户组
 	 * @param $point int 积分数
 	 */
 	protected function _get_usergroup_bypoint($point=0) {
 		$groupid = 2;
 		if(empty($point)) {
 			$member_setting = getcache('member_setting');
 			$point = $member_setting['defualtpoint'] ? $member_setting['defualtpoint'] : 0;
 		}
 		$grouplist = getcache('grouplist');
 		foreach ($grouplist as $k=>$v) {
 			$grouppointlist[$k] = $v['point'];
 		}
 		arsort($grouppointlist);
 		//如果超出用户组积分设置则为积分最高的用户组
 		if($point > max($grouppointlist)) {
 			$groupid = key($grouppointlist);
 		} else {
 			foreach ($grouppointlist as $k=>$v) {
 				if($point >= $v) {
 					$groupid = $tmp_k;
 					break;
 				}
 				$tmp_k = $k;
 			}
 		}
 		return $groupid;
 	}
 	/**
 	 * 检查用户名
 	 * @param string $username	用户名
 	 * @return $status {-4：用户名禁止注册;-1:用户名已经存在 ;1:成功}
 	 */
 	public function public_checkname_ajax() {
 		$username = isset($_GET['username']) && trim($_GET['username']) ? trim($_GET['username']) : exit(0);
 		if(CHARSET != 'utf-8') {
 			$username = iconv('utf-8', CHARSET, $username);
 			$username = addslashes($username);
 		}
 		$username = safe_replace($username);
 		//首先判断会员审核表
 		$this->verify_db = pc_base::load_model('member_verify_model');
 		if($this->verify_db->get_one(array('username'=>$username))) {
 			exit('0');
 		}
 		$this->_init_phpsso();
 		$status = $this->client->ps_checkname($username);
 		if($status == -4 || $status == -1) {
 			exit('0');
 		} else {
 			exit('1');
 		}
 	}
 	/**
 	 * 检查用户昵称
 	 * @param string $nickname	昵称
 	 * @return $status {0:已存在;1:成功}
 	 */
 	public function public_checknickname_ajax() {
 		$nickname = isset($_GET['nickname']) && trim($_GET['nickname']) ? trim($_GET['nickname']) : exit('0');
 		if(CHARSET != 'utf-8') {
 			$nickname = iconv('utf-8', CHARSET, $nickname);
 			$nickname = addslashes($nickname);
 		} 
 		//首先判断会员审核表
 		$this->verify_db = pc_base::load_model('member_verify_model');
 		if($this->verify_db->get_one(array('nickname'=>$nickname))) {
 			exit('0');
 		}
 		if(isset($_GET['userid'])) {
 			$userid = intval($_GET['userid']);
 			//如果是会员修改，而且NICKNAME和原来优质一致返回1，否则返回0
 			$info = get_memberinfo($userid);
 			if($info['nickname'] == $nickname){//未改变
 				exit('1');
 			}else{//已改变，判断是否已有此名
 				$where = array('nickname'=>$nickname);
 				$res = $this->db->get_one($where);
 				if($res) {
 					exit('0');
 				} else {
 					exit('1');
 				}
 			}
  		} else {
 			$where = array('nickname'=>$nickname);
 			$res = $this->db->get_one($where);
 			if($res) {
 				exit('0');
 			} else {
 				exit('1');
 			}
 		} 
 	}
 	/**
 	 * 检查邮箱
 	 * @param string $email
 	 * @return $status {-1:email已经存在 ;-5:邮箱禁止注册;1:成功}
 	 */
 	public function public_checkemail_ajax() {
 		$this->_init_phpsso();
 		$email = isset($_GET['email']) && trim($_GET['email']) ? trim($_GET['email']) : exit(0);
 		$status = $this->client->ps_checkemail($email);
 		if($status == -5) {	//禁止注册
 			exit('0');
 		} elseif($status == -1) {	//用户名已存在，但是修改用户的时候需要判断邮箱是否是当前用户的
 			if(isset($_GET['phpssouid'])) {	//修改用户传入phpssouid
 				$status = $this->client->ps_get_member_info($email, 3);
 				if($status) {
 					$status = unserialize($status);	//接口返回序列化，进行判断
 					if (isset($status['uid']) && $status['uid'] == intval($_GET['phpssouid'])) {
 						exit('1');
 					} else {
 						exit('0');
 					}
 				} else {
 					exit('0');
 				}
 			} else {
 				exit('0');
 			}
 		} else {
 			exit('1');
 		}
 	}
 	public function public_sina_login() {
 		define('WB_AKEY', pc_base::load_config('system', 'sina_akey'));
 		define('WB_SKEY', pc_base::load_config('system', 'sina_skey'));
 		define('WEB_CALLBACK', APP_PATH.'index.php?m=member&c=index&a=public_sina_login&callback=1');
 		pc_base::load_app_class('saetv2.ex', '' ,0);
 		$this->_session_start();
 		if(isset($_GET['callback']) && trim($_GET['callback'])) {
 			$o = new SaeTOAuthV2(WB_AKEY, WB_SKEY);
 			if (isset($_REQUEST['code'])) {
 				$keys = array();
 				$keys['code'] = $_REQUEST['code'];
 				$keys['redirect_uri'] = WEB_CALLBACK;
 				try {
 					$token = $o->getAccessToken('code', $keys);
 				} catch (OAuthException $e) {
 				}
 			}
 			if ($token) {
 				$_SESSION['token'] = $token;
 			}
 			$c = new SaeTClientV2(WB_AKEY, WB_SKEY, $_SESSION['token']['access_token'] );
 			$ms  = $c->home_timeline(); // done
 			$uid_get = $c->get_uid();
 			$uid = $uid_get['uid'];
 			$me = $c->show_user_by_id( $uid);//根据ID获取用户等基本信息
 			if(CHARSET != 'utf-8') {
 				$me['name'] = iconv('utf-8', CHARSET, $me['name']);
 				$me['location'] = iconv('utf-8', CHARSET, $me['location']);
 				$me['description'] = iconv('utf-8', CHARSET, $me['description']);
 				$me['screen_name'] = iconv('utf-8', CHARSET, $me['screen_name']);
 			}
 			if(!empty($me['id'])) {
  				//检查connect会员是否绑定，已绑定直接登录，未绑定提示注册/绑定页面
 				$where = array('connectid'=>$me['id'], 'from'=>'sina');
 				$r = $this->db->get_one($where);
 				//connect用户已经绑定本站用户
 				if(!empty($r)) {
 					//读取本站用户信息，执行登录操作
 					$password = $r['password'];
 					$this->_init_phpsso();
 					$synloginstr = $this->client->ps_member_synlogin($r['phpssouid']);
 					$userid = $r['userid'];
 					$groupid = $r['groupid'];
 					$username = $r['username'];
 					$nickname = empty($r['nickname']) ? $username : $r['nickname'];
 					$this->db->update(array('lastip'=>ip(), 'lastdate'=>SYS_TIME, 'nickname'=>$me['name']), array('userid'=>$userid));
 					if(!$cookietime) $get_cookietime = param::get_cookie('cookietime');
 					$_cookietime = $cookietime ? intval($cookietime) : ($get_cookietime ? $get_cookietime : 0);
 					$cookietime = $_cookietime ? TIME + $_cookietime : 0;
 					$phpcms_auth_key = md5(pc_base::load_config('system', 'auth_key').$this->http_user_agent);
 					$phpcms_auth = sys_auth($userid."\t".$password, 'ENCODE', $phpcms_auth_key);
 					param::set_cookie('auth', $phpcms_auth, $cookietime);
 					param::set_cookie('_userid', $userid, $cookietime);
 					param::set_cookie('_username', $username, $cookietime);
 					param::set_cookie('_groupid', $groupid, $cookietime);
 					param::set_cookie('cookietime', $_cookietime, $cookietime);
 					param::set_cookie('_nickname', $nickname, $cookietime);
 					$forward = isset($_GET['forward']) && !empty($_GET['forward']) ? $_GET['forward'] : 'index.php?m=member&c=index';
 					showmessage(L('login_success').$synloginstr, $forward);
 				} else {
  					//弹出绑定注册页面
 					$_SESSION = array();
 					$_SESSION['connectid'] = $me['id'];
 					$_SESSION['from'] = 'sina';
 					$connect_username = $me['name'];
 					//加载用户模块配置
 					$member_setting = getcache('member_setting');
 					if(!$member_setting['allowregister']) {
 						showmessage(L('deny_register'), 'index.php?m=member&c=index&a=login');
 					}
 					//获取用户siteid
 					$siteid = isset($_REQUEST['siteid']) && trim($_REQUEST['siteid']) ? intval($_REQUEST['siteid']) : 1;
 					//过滤非当前站点会员模型
 					$modellist = getcache('member_model', 'commons');
 					foreach($modellist as $k=>$v) {
 						if($v['siteid']!=$siteid || $v['disabled']) {
 							unset($modellist[$k]);
 						}
 					}
 					if(empty($modellist)) {
 						showmessage(L('site_have_no_model').L('deny_register'), HTTP_REFERER);
 					}
 					$modelid = 10; //设定默认值
 					if(array_key_exists($modelid, $modellist)) {
 						//获取会员模型表单
 						require CACHE_MODEL_PATH.'member_form.class.php';
 						$member_form = new member_form($modelid);
 						$this->db->set_model($modelid);
 						$forminfos = $forminfos_arr = $member_form->get();
 						//万能字段过滤
 						foreach($forminfos as $field=>$info) {
 							if($info['isomnipotent']) {
 								unset($forminfos[$field]);
 							} else {
 								if($info['formtype']=='omnipotent') {
 									foreach($forminfos_arr as $_fm=>$_fm_value) {
 										if($_fm_value['isomnipotent']) {
 											$info['form'] = str_replace('{'.$_fm.'}',$_fm_value['form'], $info['form']);
 										}
 									}
 									$forminfos[$field]['form'] = $info['form'];
 								}
 							}
 						}
 						$formValidator = $member_form->formValidator;
 					}
 					include template('member', 'connect');
 				}
 			} else {
 				showmessage(L('login_failure'), 'index.php?m=member&c=index&a=login');
 			}
 		} else {
 			$o = new SaeTOAuthV2(WB_AKEY, WB_SKEY);
 			$aurl = $o->getAuthorizeURL(WEB_CALLBACK);
 			include template('member', 'connect_sina');
 		}
 	}
 	/**
 	 * 盛大通行证登陆
 	 */
 	public function public_snda_login() {
 		define('SNDA_AKEY', pc_base::load_config('system', 'snda_akey'));
 		define('SNDA_SKEY', pc_base::load_config('system', 'snda_skey'));
 		define('SNDA_CALLBACK', urlencode(APP_PATH.'index.php?m=member&c=index&a=public_snda_login&callback=1'));
 		pc_base::load_app_class('OauthSDK', '' ,0);
 		$this->_session_start();		
 		if(isset($_GET['callback']) && trim($_GET['callback'])) {
 			$o = new OauthSDK(SNDA_AKEY, SNDA_SKEY, SNDA_CALLBACK);
 			$code = $_REQUEST['code'];
 			$accesstoken = $o->getAccessToken($code);
 			if(is_numeric($accesstoken['sdid'])) {
 				$userid = $accesstoken['sdid'];
 			} else {
 				showmessage(L('login_failure'), 'index.php?m=member&c=index&a=login');
 			}
 			if(!empty($userid)) {
 				//检查connect会员是否绑定，已绑定直接登录，未绑定提示注册/绑定页面
 				$where = array('connectid'=>$userid, 'from'=>'snda');
 				$r = $this->db->get_one($where);
 				//connect用户已经绑定本站用户
 				if(!empty($r)) {
 					//读取本站用户信息，执行登录操作
 					$password = $r['password'];
 					$this->_init_phpsso();
 					$synloginstr = $this->client->ps_member_synlogin($r['phpssouid']);
 					$userid = $r['userid'];
 					$groupid = $r['groupid'];
 					$username = $r['username'];
 					$nickname = empty($r['nickname']) ? $username : $r['nickname'];
 					$this->db->update(array('lastip'=>ip(), 'lastdate'=>SYS_TIME, 'nickname'=>$me['name']), array('userid'=>$userid));
 					if(!$cookietime) $get_cookietime = param::get_cookie('cookietime');
 					$_cookietime = $cookietime ? intval($cookietime) : ($get_cookietime ? $get_cookietime : 0);
 					$cookietime = $_cookietime ? TIME + $_cookietime : 0;
 					$phpcms_auth_key = md5(pc_base::load_config('system', 'auth_key').$this->http_user_agent);
 					$phpcms_auth = sys_auth($userid."\t".$password, 'ENCODE', $phpcms_auth_key);
 					param::set_cookie('auth', $phpcms_auth, $cookietime);
 					param::set_cookie('_userid', $userid, $cookietime);
 					param::set_cookie('_username', $username, $cookietime);
 					param::set_cookie('_groupid', $groupid, $cookietime);
 					param::set_cookie('cookietime', $_cookietime, $cookietime);
 					param::set_cookie('_nickname', $nickname, $cookietime);
 					param::set_cookie('_from', 'snda');
 					$forward = isset($_GET['forward']) && !empty($_GET['forward']) ? $_GET['forward'] : 'index.php?m=member&c=index';
 					showmessage(L('login_success').$synloginstr, $forward);
 				} else {				
 					//弹出绑定注册页面
 					$_SESSION = array();
 					$_SESSION['connectid'] = $userid;
 					$_SESSION['from'] = 'snda';
 					$connect_username = $userid;
 					include template('member', 'connect');
 				}
 			}	
 		} else {
 			$o = new OauthSDK(SNDA_AKEY, SNDA_SKEY, SNDA_CALLBACK);
 			$accesstoken = $o->getSystemToken();		
 			$aurl = $o->getAuthorizeURL();
 			include template('member', 'connect_snda');
 		}
 	}
 	/**
 	 * QQ号码登录
 	 * 该函数为QQ登录回调地址
 	 */
 	public function public_qq_loginnew(){
                 $appid = pc_base::load_config('system', 'qq_appid');
                 $appkey = pc_base::load_config('system', 'qq_appkey');
                 $callback = pc_base::load_config('system', 'qq_callback');
                 pc_base::load_app_class('qqapi','',0);
                 $info = new qqapi($appid,$appkey,$callback);
                 $this->_session_start();
                 if(!isset($_GET['code'])){
                          $info->redirect_to_login();
                 }else{
 					$code = $_GET['code'];
 					$openid = $_SESSION['openid'] = $info->get_openid($code);
 					if(!empty($openid)){
 						$r = $this->db->get_one(array('connectid'=>$openid,'from'=>'qq'));
 						 if(!empty($r)){
 								//QQ已存在于数据库，则直接转向登陆操作
 								$password = $r['password'];
 								$this->_init_phpsso();
 								$synloginstr = $this->client->ps_member_synlogin($r['phpssouid']);
 								$userid = $r['userid'];
 								$groupid = $r['groupid'];
 								$username = $r['username'];
 								$nickname = empty($r['nickname']) ? $username : $r['nickname'];
 								$this->db->update(array('lastip'=>ip(), 'lastdate'=>SYS_TIME, 'nickname'=>$me['name']), array('userid'=>$userid));
 								if(!$cookietime) $get_cookietime = param::get_cookie('cookietime');
 								$_cookietime = $cookietime ? intval($cookietime) : ($get_cookietime ? $get_cookietime : 0);
 								$cookietime = $_cookietime ? TIME + $_cookietime : 0;
 								$phpcms_auth_key = md5(pc_base::load_config('system', 'auth_key').$this->http_user_agent);
 								$phpcms_auth = sys_auth($userid."\t".$password, 'ENCODE', $phpcms_auth_key);
 								param::set_cookie('auth', $phpcms_auth, $cookietime);
 								param::set_cookie('_userid', $userid, $cookietime);
 								param::set_cookie('_username', $username, $cookietime);
 								param::set_cookie('_groupid', $groupid, $cookietime);
 								param::set_cookie('cookietime', $_cookietime, $cookietime);
 								param::set_cookie('_nickname', $nickname, $cookietime);
 								$forward = isset($_GET['forward']) && !empty($_GET['forward']) ? $_GET['forward'] : 'index.php?m=member&c=index';
 								showmessage(L('login_success').$synloginstr, $forward);
 						}else{	
 								//未存在于数据库中，跳去完善资料页面。页面预置用户名（QQ返回是UTF8编码，如有需要进行转码）
 								$user = $info->get_user_info();
  								$_SESSION['connectid'] = $openid;
 								$_SESSION['from'] = 'qq';
 								if(CHARSET != 'utf-8') {//转编码
 									$connect_username = iconv('utf-8', CHARSET, $user['nickname']); 
 								} else {
 									 $connect_username = $user['nickname']; 
 								}
  								include template('member', 'connect');
 						}
 					}
                 }
     }
 	/**
 	 * QQ微博登录
 	 */
 	public function public_qq_login() {
 		define('QQ_AKEY', pc_base::load_config('system', 'qq_akey'));
 		define('QQ_SKEY', pc_base::load_config('system', 'qq_skey'));
 		pc_base::load_app_class('qqoauth', '' ,0);
 		$this->_session_start();
 		if(isset($_GET['callback']) && trim($_GET['callback'])) {
 			$o = new WeiboOAuth(QQ_AKEY, QQ_SKEY, $_SESSION['keys']['oauth_token'], $_SESSION['keys']['oauth_token_secret']);
 			$_SESSION['last_key'] = $o->getAccessToken($_REQUEST['oauth_verifier']);
 			if(!empty($_SESSION['last_key']['name'])) {
 				//检查connect会员是否绑定，已绑定直接登录，未绑定提示注册/绑定页面
 				$where = array('connectid'=>$_REQUEST['openid'], 'from'=>'qq');
 				$r = $this->db->get_one($where);
 				//connect用户已经绑定本站用户
 				if(!empty($r)) {
 					//读取本站用户信息，执行登录操作
 					$password = $r['password'];
 					$this->_init_phpsso();
 					$synloginstr = $this->client->ps_member_synlogin($r['phpssouid']);
 					$userid = $r['userid'];
 					$groupid = $r['groupid'];
 					$username = $r['username'];
 					$nickname = empty($r['nickname']) ? $username : $r['nickname'];
 					$this->db->update(array('lastip'=>ip(), 'lastdate'=>SYS_TIME, 'nickname'=>$me['name']), array('userid'=>$userid));
 					if(!$cookietime) $get_cookietime = param::get_cookie('cookietime');
 					$_cookietime = $cookietime ? intval($cookietime) : ($get_cookietime ? $get_cookietime : 0);
 					$cookietime = $_cookietime ? TIME + $_cookietime : 0;
 					$phpcms_auth_key = md5(pc_base::load_config('system', 'auth_key').$this->http_user_agent);
 					$phpcms_auth = sys_auth($userid."\t".$password, 'ENCODE', $phpcms_auth_key);
 					param::set_cookie('auth', $phpcms_auth, $cookietime);
 					param::set_cookie('_userid', $userid, $cookietime);
 					param::set_cookie('_username', $username, $cookietime);
 					param::set_cookie('_groupid', $groupid, $cookietime);
 					param::set_cookie('cookietime', $_cookietime, $cookietime);
 					param::set_cookie('_nickname', $nickname, $cookietime);
 					param::set_cookie('_from', 'snda');
 					$forward = isset($_GET['forward']) && !empty($_GET['forward']) ? $_GET['forward'] : 'index.php?m=member&c=index';
 					showmessage(L('login_success').$synloginstr, $forward);
 				} else {				
 					//弹出绑定注册页面
 					$_SESSION = array();
 					$_SESSION['connectid'] = $_REQUEST['openid'];
 					$_SESSION['from'] = 'qq';
 					$connect_username = $_SESSION['last_key']['name'];
 					//加载用户模块配置
 					$member_setting = getcache('member_setting');
 					if(!$member_setting['allowregister']) {
 						showmessage(L('deny_register'), 'index.php?m=member&c=index&a=login');
 					}
 					//获取用户siteid
 					$siteid = isset($_REQUEST['siteid']) && trim($_REQUEST['siteid']) ? intval($_REQUEST['siteid']) : 1;
 					//过滤非当前站点会员模型
 					$modellist = getcache('member_model', 'commons');
 					foreach($modellist as $k=>$v) {
 						if($v['siteid']!=$siteid || $v['disabled']) {
 							unset($modellist[$k]);
 						}
 					}
 					if(empty($modellist)) {
 						showmessage(L('site_have_no_model').L('deny_register'), HTTP_REFERER);
 					}
 					$modelid = 10; //设定默认值
 					if(array_key_exists($modelid, $modellist)) {
 						//获取会员模型表单
 						require CACHE_MODEL_PATH.'member_form.class.php';
 						$member_form = new member_form($modelid);
 						$this->db->set_model($modelid);
 						$forminfos = $forminfos_arr = $member_form->get();
 						//万能字段过滤
 						foreach($forminfos as $field=>$info) {
 							if($info['isomnipotent']) {
 								unset($forminfos[$field]);
 							} else {
 								if($info['formtype']=='omnipotent') {
 									foreach($forminfos_arr as $_fm=>$_fm_value) {
 										if($_fm_value['isomnipotent']) {
 											$info['form'] = str_replace('{'.$_fm.'}',$_fm_value['form'], $info['form']);
 										}
 									}
 									$forminfos[$field]['form'] = $info['form'];
 								}
 							}
 						}
 						$formValidator = $member_form->formValidator;
 					}	
 					include template('member', 'connect');
 				}
 			} else {
 				showmessage(L('login_failure'), 'index.php?m=member&c=index&a=login');
 			}
 		} else {
 			$oauth_callback = APP_PATH.'index.php?m=member&c=index&a=public_qq_login&callback=1';
 			$oauth_nonce = md5(SYS_TIME);
 			$oauth_signature_method = 'HMAC-SHA1';
 			$oauth_timestamp = SYS_TIME;
 			$oauth_version = '1.0';
 			$url = "https://open.t.qq.com/cgi-bin/request_token?oauth_callback=$oauth_callback&oauth_consumer_key=".QQ_AKEY."&oauth_nonce=$oauth_nonce&oauth_signature=".QQ_SKEY."&oauth_signature_method=HMAC-SHA1&oauth_timestamp=$oauth_timestamp&oauth_version=$oauth_version"; 
 			$o = new WeiboOAuth(QQ_AKEY, QQ_SKEY);
 			$keys = $o->getRequestToken(array('callback'=>$oauth_callback));
 			$_SESSION['keys'] = $keys;
 			$aurl = $o->getAuthorizeURL($keys['oauth_token'] ,false , $oauth_callback);
 			include template('member', 'connect_qq');	
 		}
 	}
 	/**
 	 * 找回密码
 	 * 新增加短信找回方式 
 	 */
 	public function public_forget_password () {
 		$email_config = getcache('common', 'commons');
 		//SMTP MAIL 二种发送模式
  		if($email_config['mail_type'] == '1'){
 			if(empty($email_config['mail_user']) || empty($email_config['mail_password'])) {
 				showmessage(L('email_config_empty'), HTTP_REFERER);
 			}
 		}
 		$this->_session_start();
 		$member_setting = getcache('member_setting');
 		if(isset($_POST['dosubmit'])) {
 			//if ($_SESSION['code'] != strtolower($_POST['code'])) {
 			//	showmessage(L('code_error'), HTTP_REFERER);
 			//}
 			$memberinfo = $this->db->get_one(array('email'=>$_POST['email']));
 			if(!empty($memberinfo['email'])) {
 				$email = $memberinfo['email'];
 			} else {
 				showmessage(L('email_error'), HTTP_REFERER);
 			}
 			pc_base::load_sys_func('mail');
 			$phpcms_auth_key = md5(pc_base::load_config('system', 'auth_key'));
 			$code = sys_auth($memberinfo['userid']."\t".SYS_TIME, 'ENCODE', $phpcms_auth_key);
 			$url = APP_PATH."index.php?m=member&c=index&a=public_forget_password&code=$code";
 			$message = $member_setting['forgetpassword'];
 			$message = str_replace(array('{click}','{url}','{username}'), array('<a href="'.$url.'">'.L('please_click').'</a>',$url,$memberinfo['username']), $message);
 			//获取站点名称
 			$sitelist = getcache('sitelist', 'commons');
 			if(isset($sitelist[$memberinfo['siteid']]['name'])) {
 				$sitename = $sitelist[$memberinfo['siteid']]['name'];
 			} else {
 				$sitename = 'PHPCMS_V9_MAIL';
 			}
 			sendmail($email, L('forgetpassword'), $message, '', '', $sitename);
 			showmessage(L('operation_success'), 'index.php');
 		} elseif($_GET['code']) {
 			$phpcms_auth_key = md5(pc_base::load_config('system', 'auth_key'));
 			$hour = date('y-m-d h', SYS_TIME);
 			$code = sys_auth($_GET['code'], 'DECODE', $phpcms_auth_key);
 			$code = explode("\t", $code);
 			if(is_array($code) && is_numeric($code[0]) && date('y-m-d h', SYS_TIME) == date('y-m-d h', $code[1])) {
 				$memberinfo = $this->db->get_one(array('userid'=>$code[0]));
 				if(empty($memberinfo['phpssouid'])) {
 					showmessage(L('operation_failure'), 'index.php');
 				}
 				$updateinfo = array();
 				$password = random(8,"23456789abcdefghkmnrstwxy");
 				$updateinfo['password'] = password($password, $memberinfo['encrypt']);
 				$this->db->update($updateinfo, array('userid'=>$code[0]));
 				if(pc_base::load_config('system', 'phpsso')) {
 					//初始化phpsso
 					$this->_init_phpsso();
 					$this->client->ps_member_edit('', $email, '', $password, $memberinfo['phpssouid'], $memberinfo['encrypt']);
 				}
 				$email = $memberinfo['email'];
 				//获取站点名称
 				$sitelist = getcache('sitelist', 'commons');		
 				if(isset($sitelist[$memberinfo['siteid']]['name'])) {
 					$sitename = $sitelist[$memberinfo['siteid']]['name'];
 				} else {
 					$sitename = 'PHPCMS_V9_MAIL';
 				}
 				pc_base::load_sys_func('mail');
 				sendmail($email, L('forgetpassword'), "New password:".$password, '', '', $sitename);
 				showmessage(L('operation_success').L('newpassword').':'.$password, 'index.php');
 			} else {
 				showmessage(L('operation_failure'), 'index.php');
 			}
 		} else {
 			$siteid = isset($_REQUEST['siteid']) && trim($_REQUEST['siteid']) ? intval($_REQUEST['siteid']) : 1;
 			$siteinfo = siteinfo($siteid);
 			include template('member', 'forget_password');
 		}
 	}
 	/**
 	*通过手机修改密码
 	*方式：用户发送HHPWD afei985#821008 至 1065788 ，PHPCMS进行转发到网站运营者指定的回调地址，在回调地址程序进行密码修改等操作,处理成功时给用户发条短信确认。
 	*phpcms 以POST方式传递相关数据到回调程序中
 	*要求：网站中会员系统，mobile做为主表字段，并且唯一（如已经有手机号码，把号码字段转为主表字段中）
 	*/
 	public function public_changepwd_bymobile(){
 		$phone = $_REQUEST['phone'];
 		$msg = $_REQUEST['msg'];
 		$sms_key = $_REQUEST['sms_passwd'];
 		$sms_pid = $_REQUEST['sms_pid'];
 		if(empty($phone) || empty($msg) || empty($sms_key) || empty($sms_pid)){
 			return false;
 		}
 		if(!preg_match('/^1([0-9]{9})/',$phone)) {
 			return false;
 		}
 		//判断是否PHPCMS请求的接口
 		pc_base::load_app_func('global','sms');
 		pc_base::load_app_class('smsapi', 'sms', 0);
 		$this->sms_setting_arr = getcache('sms');
 		$siteid = $_REQUEST['siteid'] ? $_REQUEST['siteid'] : 1;
 		if(!empty($this->sms_setting_arr[$siteid])) {
 			$this->sms_setting = $this->sms_setting_arr[$siteid];
 		} else {
 			$this->sms_setting = array('userid'=>'', 'productid'=>'', 'sms_key'=>'');
 		}
 		if($sms_key != $this->sms_setting['sms_key'] || $sms_pid != $this->sms_setting['productid']){
 			return false;
 		}
 		//取用户名
 		$msg_array = explode("@@",$str);
 		$newpwd = $msg_array[1];
 		$username = $msg_array[2];
 		$array = $this->db->get_one(array('mobile'=>$phone,'username'=>$username));
 		if(empty($array)){
 			echo 1;
 		}else{
 			$result = $this->db->update(array('password'=>$newpwd),array('mobile'=>$phone,'username'=>$username));
 			if($result){
 				//修改成功，发送短信给用户回执
  				//检查短信余额
 				if($this->sms_setting['sms_key']) {
 					$smsinfo = $this->smsapi->get_smsinfo();
 				}
 				if($smsinfo['surplus'] < 1) {
  					echo 1;
 				}else{
  					$this->smsapi = new smsapi($this->sms_setting['userid'], $this->sms_setting['productid'], $this->sms_setting['sms_key']);
 					$content = '你好,'.$username.',你的新密码已经修改成功：'.$newpwd.' ,请妥善保存！';
 					$return = $this->smsapi->send_sms($phone, $content, SYS_TIME, CHARSET);
 					echo 1;
 				}
  			}
 		}
 	}
 	/**
 	 * 手机短信方式找回密码
 	 */
 	public function public_forget_password_mobile () {
 		$step = intval($_POST['step']);
 		$step = max($step,1);
 		$this->_session_start();
 		if(isset($_POST['dosubmit']) && $step==2) {
 		//处理提交申请，以手机号为准
 			if ($_SESSION['code'] != strtolower($_POST['code'])) {
 				showmessage(L('code_error'), HTTP_REFERER);
 			}
 			$username = safe_replace($_POST['username']);
 			$r = $this->db->get_one(array('username'=>$username),'userid,mobile');
 			if($r['mobile']=='') {
 				$_SESSION['mobile'] = '';
 				$_SESSION['userid'] = '';
 				$_SESSION['code'] = '';
 				showmessage("该账号没有绑定手机号码，请选择其他方式找回！");
 			}
 			$_SESSION['mobile'] = $r['mobile'];
 			$_SESSION['userid'] = $r['userid'];
 			include template('member', 'forget_password_mobile');
 		} elseif(isset($_POST['dosubmit']) && $step==3) {
 			$sms_report_db = pc_base::load_model('sms_report_model');
 			$mobile_verify = $_POST['mobile_verify'];
 			$mobile = $_SESSION['mobile'];
 			if($mobile){
 				if(!preg_match('/^1([0-9]{10})$/',$mobile)) exit('check phone error');
 				pc_base::load_app_func('global','sms');
 				$posttime = SYS_TIME-600;
 				$where = "`mobile`='$mobile' AND `posttime`>'$posttime'";
 				$r = $sms_report_db->get_one($where,'id,id_code','id DESC');
 				if($r && $r['id_code']==$mobile_verify) {
 					$sms_report_db->update(array('id_code'=>''),$where);
 					$userid = $_SESSION['userid'];
 					$updateinfo = array();
 					$password = random(8,"23456789abcdefghkmnrstwxy");
 					$encrypt = random(6,"23456789abcdefghkmnrstwxyABCDEFGHKMNRSTWXY");
 					$updateinfo['encrypt'] = $encrypt;
 					$updateinfo['password'] = password($password, $encrypt);
 					$this->db->update($updateinfo, array('userid'=>$userid));
 					$rs = $this->db->get_one(array('userid'=>$userid),'phpssouid');
 					if(pc_base::load_config('system', 'phpsso')) {
 						//初始化phpsso
 						$this->_init_phpsso();
 						$this->client->ps_member_edit('', '', '', $password, $rs['phpssouid'], $encrypt);
 					}
 					$status = sendsms($mobile, $password, 5);
 					if($status!==0) showmessage($status);
 					$_SESSION['mobile'] = '';
 					$_SESSION['userid'] = '';
 					$_SESSION['code'] = '';
 					showmessage("密码已重置成功！请查收手机",'?m=member&c=index&a=login');
 				} else {
 					showmessage("短信验证码错误！请重新获取！");
 				}
 			}else{
 				showmessage("短信验证码已过期！请重新获取！");
 			}
 		} else {
 			$siteid = isset($_REQUEST['siteid']) && trim($_REQUEST['siteid']) ? intval($_REQUEST['siteid']) : 1;
 			$siteinfo = siteinfo($siteid);
  			include template('member', 'forget_password_mobile');
 		}
 	}
 	//通过用户名找回密码
 	public function public_forget_password_username() {
 		$step = intval($_POST['step']);
 		$step = max($step,1);
 		$this->_session_start();
 		if(isset($_POST['dosubmit']) && $step==2) {
 		//处理提交申请，以手机号为准
 			if ($_SESSION['code'] != strtolower($_POST['code'])) {
 				showmessage(L('code_error'), HTTP_REFERER);
 			}
 			$username = safe_replace($_POST['username']);
 			$r = $this->db->get_one(array('username'=>$username),'userid,email');
 			if($r['email']=='') {
 				$_SESSION['userid'] = '';
 				$_SESSION['code'] = '';
 				showmessage("该账号没有绑定手机号码，请选择其他方式找回！");
 			} else {
 				$_SESSION['userid'] = $r['userid'];
 				$_SESSION['email'] = $r['email'];
 			}
 			$email_arr = explode('@',$r['email']);
 			include template('member', 'forget_password_username');
 		} elseif(isset($_POST['dosubmit']) && $step==3) {
 			$sms_report_db = pc_base::load_model('sms_report_model');
 			$mobile_verify = $_POST['mobile_verify'];
 			$email = $_SESSION['email'];
 			if($email){
 				if(!preg_match('/^([a-z0-9_]+)@([a-z0-9_]+).([a-z]{2,6})$/',$email)) exit('check email error');
 				if($_SESSION['emc_times']=='' || $_SESSION['emc_times']<=0){
 					showmessage("验证次数超过5次,验证码失效，请重新获取邮箱验证码！",HTTP_REFERER,3000);
 				}
 				$_SESSION['emc_times'] = $_SESSION['emc_times']-1;
 				if($_SESSION['emc']!='' && $_POST['email_verify']==$_SESSION['emc']) {
 					$userid = $_SESSION['userid'];
 					$updateinfo = array();
 					$password = random(8,"23456789abcdefghkmnrstwxy");
 					$encrypt = random(6,"23456789abcdefghkmnrstwxyABCDEFGHKMNRSTWXY");
 					$updateinfo['encrypt'] = $encrypt;
 					$updateinfo['password'] = password($password, $encrypt);
 					$this->db->update($updateinfo, array('userid'=>$userid));
 					$rs = $this->db->get_one(array('userid'=>$userid),'phpssouid');
 					if(pc_base::load_config('system', 'phpsso')) {
 						//初始化phpsso
 						$this->_init_phpsso();
 						$this->client->ps_member_edit('', '', '', $password, $rs['phpssouid'], $encrypt);
 					}
 					$_SESSION['email'] = '';
 					$_SESSION['userid'] = '';
 					$_SESSION['emc'] = '';
 					$_SESSION['code'] = '';
 					pc_base::load_sys_func('mail');
 					sendmail($email, '密码重置通知', "您在".date('Y-m-d H:i:s')."通过密码找回功能，重置了本站密码。");
 					include template('member', 'forget_password_username');
 					exit;
 				} else {
 					showmessage("验证码错误！请重新获取！",HTTP_REFERER,3000);
 				}
 			} else {
 				showmessage("非法请求！");
 			}
 		} else {
  			include template('member', 'forget_password_username');
 		}
 	}
 	//邮箱获取验证码
 	public function public_get_email_verify() {
 		pc_base::load_sys_func('mail');
 		$this->_session_start();
 		$code = $_SESSION['emc'] = random(8,"23456789abcdefghkmnrstwxy");
 		$_SESSION['emc_times']=5;
 		$message = '您的验证码为：'.$code;
 		sendmail($_SESSION['email'], '邮箱找回密码验证', $message);
 		echo '1';
 	}
 	//common获取学校级别
 	    public function common_hightschool($title) {
 	 	pc_base::load_sys_class('form', '', 0);
         $list=pc_base::load_model('hightschool_model');
         $list1=pc_base::load_model('hightschool_data_model');
           $rs = $list->query("select b.schoolstyle from qu_hightschool a, qu_hightschool_data b where a.id=b.id and a.title = '".$title."' order by a.id "); 
 		  $data = $list->fetch_array($rs);
 		  //print_r($data);
 		  if(count($data)>0){
 		  	$val=$data[0][schoolstyle];
 		  }else{
 		  	$val=4;
 		  }
         //print_r($val);  
 	 	return $val;
 	    }
     public function s1() { 
     	pc_base::load_sys_class('form', '', 0);
     	//获取会员信息
         $memberinfo = $this->memberinfo;
 		//初始化phpsso
 		$phpsso_api_url = $this->_init_phpsso();
 		//获取头像数组
 		$avatar = $this->client->ps_getavatar($this->memberinfo['phpssouid']);
 		$grouplist = getcache('grouplist');
 		$memberinfo['groupname'] = $grouplist[$memberinfo[groupid]]['name'];
         //print_r($memberinfo['userid']);
     	//生成选校报告
 		$list=pc_base::load_model('school_data_model');
 		$list1=pc_base::load_model('user_report_model');
 		if(isset($_POST['dosubmit1'])) {
 			//验证曾就读学校
                 $average=$_POST['average'];
				$gmat=$_POST['gmat'];
				$gpa=$_POST['gpa'];
				$gre=$_POST['gre'];
				$toefl=$_POST['toefl'];
				$sat=$_POST['sat'];
				$ielts=$_POST['ielts'];
				$zhuanye=$_POST['zhuanye'];
                $oldschool=$_POST['oldschool'];
                $schoolstyle=$this->common_hightschool($oldschool);
     			//print_r($schoolstyle);
         	    if($schoolstyle<3){
					if($gpa>=85 && $ielts>=7 && $gmat>=700){
						$student_style=1;
				    }
					elseif( ($gpa>=85 && $ielts>=7 )|| ($gpa>=85  && $gmat>=700) ||($gpa>=80 && ($ielts>=7 || $gmat>=700))){
						$student_style=2;
					}
					elseif($gpa>=75 && $gpa<=80){
						$student_style=3;
                    }
					else{
						$student_style=0;
					}
				}
				elseif($schoolstyle==3){
					if( ($gpa>=85 && $ielts>=7 )|| ($gpa>=85  && $gmat>=700) ||($gpa>=80 && ($ielts>=7 || $gmat>=700))){
						$student_style=2;
					}
					elseif($gpa>=80 || $ielts>=7 || $gmat>=700){
						$student_style=3;
                    }
					elseif($gpa>=75 && $gpa<=80){
						$student_style=4;
                    }
					else{
						$student_style=0;	
                    }
                 }
 		    elseif($schoolstyle==4){
 		    	if($gpa>=85){
 		    		$student_style=3;
 		    	}
 		    	elseif($gpa>=80 && $gpa<=85){
 		    		$student_style=4;
 		    	}
 		    	elseif($gpa>=75 && $gpa<=80){
 		    		$student_style=5;
 		    	}
 		    	else{
 		    	    $student_style=0;	
 		    	}
 		    }
             else{
 		    	    $student_style=0;	
 		    	}
             if($student_style==1){ 
                 $schools1 = $list->query("select * from qu_school_data where country ='2' and rank between 1 and 5 order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where country ='2' and  rank between 6 and 8 order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
                 foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where country ='2' and  rank between 9 and 12 order by rand() limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }
             elseif($student_style==2){ 
                 $schools1 = $list->query("select * from qu_school_data where country ='2' and  rank between 1 and 5  order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
                 foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where country ='2' and  rank between 6 and 10  order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
                 foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where country ='2' and  rank between 11 and 15 order by rank asc limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }
             elseif($student_style==3){ 
                 $schools1 = $list->query("select * from qu_school_data where country ='2' and  rank between 5 and 10  order by rand() limit 2 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where country ='2' and  rank between 11 and 15  order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
 		         foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where country ='2' and  rank between 16 and 20 order by rank asc limit 3 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }
             elseif($student_style==4){ 
                 $schools1 = $list->query("select * from qu_school_data where country ='2' and  rank between 6 and 11  order by rand() limit 2 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where country ='2' and  rank between 12 and 20  order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
 		         foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where country ='2' and  rank between 21 and 30 order by rank asc limit 3 "); 
 		        $schools_data3 = $list->fetch_array($schools3);
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3); 
             }   
             elseif($student_style==5){ 
                 $schools1 = $list->query("select * from qu_school_data where country ='2' and  rank between 10 and 15  order by rand() limit 2 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where country ='2' and  rank between 16 and 30  order by rand() limit 4 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
 		         foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where country ='2' and  rank between 30 and 40 order by rank asc limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }   
             $data_post=array('sid1'=>$sid1,'sid2'=>$sid2,'sid3'=>$sid3,'cid'=>1,'userid'=>$memberinfo['userid'],'student_style'=>$student_style);//
             $r=$list1->insert($data_post);
             if ($r) {
 			    showmessage(L('生成选校报告成功，请到会员中心查看'),'/index.php?m=member&c=index&a=s&tab=0');
 		    }else{
 			    showmessage(L('生成选校报告失败'),HTTP_REFERER);
 		    }	    
         }             	
 	}
 	public function s2() {                                               		
 	    pc_base::load_sys_class('form', '', 0);
 	    //获取会员信息
         $memberinfo = $this->memberinfo;
 		//初始化phpsso
 		$phpsso_api_url = $this->_init_phpsso();
 		//获取头像数组
 		$avatar = $this->client->ps_getavatar($this->memberinfo['phpssouid']);
 		$grouplist = getcache('grouplist');
 		$memberinfo['groupname'] = $grouplist[$memberinfo[groupid]]['name'];
         //print_r($memberinfo['userid']);
     	//生成选校报告
 		$list=pc_base::load_model('school_data_model');
 		$list1=pc_base::load_model('user_report_model');
 		if(isset($_POST['dosubmit2'])) {
      $average=$_POST['average'];
 $gmat=$_POST['gmat'];
 $gpa=$_POST['gpa'];
 $gre=$_POST['gre'];
 $toefl=$_POST['toefl'];
 $sat=$_POST['sat'];
 $ielts=$_POST['ielts'];
 $zhuanye=$_POST['zhuanye'];
 			//验证曾就读学校
 				$oldschool=$_POST['oldschool'];
 				$schoolstyle=$this->common_hightschool($oldschool);
 		    if($schoolstyle<3){
 		    	if($average>=75){
 		    		$student_style=1;
 		    	}
 		        else{
 		    	    $student_style=0;	
 		    	}	
 		    }
 		    elseif($schoolstyle>2){
 		    	if($average>=80){
 		    		$student_style=2;
 		    	}
 		    	elseif($average>=75 && $average<=80){
 		    		$student_style=3;
 		    	}
 		    	else{
 		    	    $student_style=0;	
 		    	}
 		    }
             else{
 		    	    $student_style=0;	
 		    	}
             if($student_style==1){ 
                 $schools2 = $list->query("select * from qu_school_data where country ='4' and  rank between 1 and 8 order by rand() limit 8"); 
 		        $schools_data2 = $list->fetch_array($schools2);
                 foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid1=implode(',',$ids2);
             }
             elseif($student_style==2){ 
                 $schools2 = $list->query("select * from qu_school_data where country ='4' and  rank between 1 and 8 order by rand()  limit 8"); 
 		        $schools_data2 = $list->fetch_array($schools2);
                 foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid1=implode(',',$ids2);
             }
             elseif($student_style==3){ 
 		        $schools2 = $list->query("select * from qu_school_data where country ='4' and  rank between 1 and 20 order by rand()  limit 8"); 
 		        $schools_data2 = $list->fetch_array($schools2);
                 foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid1=implode(',',$ids2);
             }
             $data_post=array('sid1'=>$sid1,'sid2'=>$sid2,'sid3'=>$sid3,'cid'=>2,'userid'=>$memberinfo['userid'],'student_style'=>$student_style);//
             $r=$list1->insert($data_post);
             //print_r($data_post);exit();
             if ($r) {
             	showmessage(L('生成选校报告成功，请到会员中心查看'),'/index.php?m=member&c=index&a=s&tab=1');
             }else{
             	showmessage(L('生成选校报告失败'),HTTP_REFERER);
 		    }	    
         }         
 	}
 	public function s3() {                                               	
 	    pc_base::load_sys_class('form', '', 0);
 	    //获取会员信息
         $memberinfo = $this->memberinfo;
 		//初始化phpsso
 		$phpsso_api_url = $this->_init_phpsso();
 		//获取头像数组
 		$avatar = $this->client->ps_getavatar($this->memberinfo['phpssouid']);
 		$grouplist = getcache('grouplist');
 		$memberinfo['groupname'] = $grouplist[$memberinfo[groupid]]['name'];
         //print_r($memberinfo['userid']);
     	//生成选校报告
 		$list=pc_base::load_model('school_data_model');
 		$list1=pc_base::load_model('user_report_model');
 		if(isset($_POST['dosubmit3'])) {
 			//验证曾就读学校
 $average=$_POST['average'];
 $gmat=$_POST['gmat'];
 $gpa=$_POST['gpa'];
 $gre=$_POST['gre'];
 $toefl=$_POST['toefl'];
 $sat=$_POST['sat'];
 $ielts=$_POST['ielts'];
 $zhuanye=$_POST['zhuanye'];
 				$oldschool=$_POST['oldschool'];
 				$schoolstyle=$this->common_hightschool($oldschool);
 			//print_r($schoolstyle);
 		    //指标都在一二级别的情况
 		    //1,2,3,4指标都在一级属于一等学生。
 		    if($schoolstyle==1 && $gpa>=88 && $toefl>=110 &&$gre>=330){
 		    	$student_style=1;
 		    }
 		    //1,2,3,4指标有两个满足在一级，另外两个在二级 为二等学生。*/
 		    elseif($schoolstyle==1 && $gpa>=88 && $toefl>=104 && $toefl<=109 &&$gre>=325 &&$gre<=329){
 		    	$student_style=2;
 		    }
 		    elseif($schoolstyle==1 && $toefl>=110 && $gpa>=85 && $gpa<=87 &&$gre>=325 &&$gre<=329){
 		    	$student_style=2;
 		    }
 		    elseif($schoolstyle==1 && $gre>=330 && $gpa>=85 && $gpa<=87 &&$toefl>=104 &&$toefl<=109){
 		    	$student_style=2;
 		    }
 		    elseif($gpa>=88 && $toefl>=110 && $schoolstyle=2 &&$gre>=325 &&$gre<=329){
 		    	$student_style=2;
 		    }
 		    elseif($gpa>=88 && $gre>=330 && $schoolstyle=2 &&$toefl>=104 &&$toefl<=109){
 		    	$student_style=2;
 		    }
 		    elseif($toefl>=110 && $gre>=330 && $schoolstyle=2 &&$gpa>=85 &&$gpa<=87){
 		    	$student_style=2;
 		    }
            //除了以上两种种情况，如果客户四个指标均在2或者以上，为三等学生。（也就是一个一级， 或者全是二级的情况）。*/
 		    elseif($schoolstyle<=2 && $gpa>=85 && $toefl>=104 &&$gre>=325){
 		    	$student_style=3;
 		    }
 		    //2,3,4指标中出现某一项指标在三级时，其他指标在2级及以上（其他指标在1级或者2级 ）那么判定为三等学生
 			elseif($gpa >= 82 && $gpa <= 85 && $schoolstyle < 3 && $toefl >= 104  && $gre >= 325){
 		    	$student_style=3;
 		    }
 		    elseif($toefl>=100 && $toefl<=103 && $schoolstyle<3 && $gpa>=85  &&$gre>=325){
 		    	$student_style=3;
 		    }
 		    elseif($gre>=320 && $gre<=324 && $schoolstyle<3 && $gpa>=85  &&$toefl>=104){
 		    	$student_style=3;
 		    }
 		    //2,3,4指标出现2个或者3个指标在三级，其他指标在2级及以上，判定为四等学生。*/
             elseif($gpa>=82 && $gpa<=85 && $toefl>=100 && $toefl<=103 && $schoolstyle<3 &&$gre>=325){
 		    	$student_style=4;
 		    }
 		    elseif($gpa>=82 && $gpa<=85 &&$gre>=320 &&$gre<=324 && $schoolstyle<3 && $toefl>=104){
 		    	$student_style=4;
 		    }
 		    elseif($toefl>=100 && $toefl<=103  &&$gre>=320 &&$gre<=324 && $schoolstyle<3  &&  $gpa>=85){
 		    	$student_style=4;
 		    }
			elseif($toefl>=100 && $toefl<=103  &&$gre>=320 &&$gre<=324 && $schoolstyle<3  &&  $gpa<=85&&  $gpa>=82){
 		    	$student_style=4;
 		    }
 		    //2,3,4 指标都在三级， 就不考虑1指标了， 那么判定为五等生。*/
 		    elseif($gpa>=82 && $gpa<=85 && $toefl>=100 && $toefl<=103  &&$gre>=320 &&$gre<=324 ){
 		    	$student_style=4;
 		    }
 		    //当只有指标2或者4其中一个在四级，其他都在三级及以上，判定为五等生。*/
 		    elseif((($gpa>=80 && $gpa<=81.99 &&$toefl>=100 && $gre>=320) || ($gre>=310 && $gre<=319 &&$toefl>=100 && $gpa>=82))  ){
 		    	$student_style=5;
 		    }
 		    //当指标2和4同时在四级，3在三级及其以上，判定为六等生。*/
 		    elseif($gpa>=80 && $gpa<=81.99 && $gre>=310 && $gre<=319  &&$toefl>=100){
 		    	$student_style=6;
 		    }
 		    //当指标3托福 在四级时，其他指标都在四级和四级以上时，判定为六等学生。*/
 		    elseif($toefl>=92 && $toefl<=99 && $gpa>=80  &&$gre>=310){
 		    	$student_style=6;
 		    }
			
			//3,4指标有一个是五级，2为四级及其以上时，那么 判定为六等学生
			elseif($gpa>=80 && (($toefl>=85&&$toefl<=91)|| ($gre>=300 &&$gre<=309))){
 		    	$student_style=6;
 		    }
 		    
 		    //当2为五级，其他在5级以及五级以上时，判定为七等生。*/
 		    elseif($gpa>=76 && $gpa<=80 && $toefl>=85  &&$gre>=300){
 		    	$student_style=7;
 		    }
 		    //当2为5级，其他三个指标都在三级或者三级以上，定位为六等生*/
 		    elseif($gpa>=76 && $gpa<=80 && $toefl>=100  &&$gre>=320){
 		    	$student_style=6;
 		    }
 		   //指标出现六级的情况。*/
             //指标3出现六级，其他都在四级及其以上时，定位为六等生。*/
             elseif($toefl>=80 && $toefl<=84 && $gpa>=80  &&$gre>=310){
 		    	$student_style=6;
 		    }
 		    //指标3出现六级，指标四也出现六级，定位为七等生。*/
             elseif($toefl>=80 && $toefl<=84 && $gre>=285  &&$gre<=299){
 		    	$student_style=7;
 		    }
 		    else{
 		    	$student_style=0;
 		    }
			
       //print_r($schoolstyle);
        //print_r($student_style);exit();			
			
 		    if($student_style==1){ 
                 $schools1 = $list->query("select * from qu_school_data where country ='1' and  rank between 1 and 10 order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where country ='1' and  rank between 11 and 20 order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
                 foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where  country ='1' and rank between 21 and 40 order by rand() limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }
             elseif($student_style==2){ 
                 $schools1 = $list->query("select * from qu_school_data where  country ='1' and rank between 1 and 20  order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where country ='1' and  rank between 21 and 40  order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2);
 		        foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2); 
                 $schools3 = $list->query("select * from qu_school_data where country ='1' and  rank between 41 and 50 order by rank asc limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }
             elseif($student_style==3){ 
                 $schools1 = $list->query("select * from qu_school_data where  country ='1' and rank between 10 and 30  order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where  country ='1' and rank between 31 and 50  order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
 		        foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where  country ='1' and rank between 51 and 65 order by rank asc limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3);
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3); 
             }
             elseif($student_style==4){ 
                 $schools1 = $list->query("select * from qu_school_data where  country ='1' and rank between 10 and 30  order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where  country ='1' and rank between 31 and 60  order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
 		        foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where  country ='1' and rank between 61 and 80 order by rank asc limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }   
             elseif($student_style==5){ 
                 $schools1 = $list->query("select * from qu_school_data where country ='1' and  rank between 20 and 40  order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where country ='1' and  rank between 41 and 60  order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
 		        foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where country ='1' and  rank between 61 and 80 order by rank asc limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }
             elseif($student_style==6){ 
                 $schools1 = $list->query("select * from qu_school_data where  country ='1' and rank between 40 and 60  order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where  country ='1' and rank between 61 and 90  order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
 		        foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where  country ='1' and rank between 91 and 120 order by rank asc limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }   
             elseif($student_style==7){ 
                 $schools1 = $list->query("select * from qu_school_data where  country ='1' and rank between 80 and 100  order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where country ='1' and  rank between 101 and 120  order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
 		        foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where  country ='1' and rank between 121 and 150 order by rank asc limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }    
             $data_post=array('sid1'=>$sid1,'sid2'=>$sid2,'sid3'=>$sid3,'cid'=>3,'userid'=>$memberinfo['userid'],'student_style'=>$student_style);//
              $r=$list1->insert($data_post);
             //print_r($data_post);exit();
             if ($r) {
             	showmessage(L('生成选校报告成功，请到会员中心查看'),'/index.php?m=member&c=index&a=s&tab=2');
             }else{
             	showmessage(L('生成选校报告失败'),HTTP_REFERER);
 		    }	 
 	    }
 	}
 	public function s4() {                                               		
 	    pc_base::load_sys_class('form', '', 0);
 	    //获取会员信息
         $memberinfo = $this->memberinfo;
 		//初始化phpsso
 		$phpsso_api_url = $this->_init_phpsso();
 		//获取头像数组
 		$avatar = $this->client->ps_getavatar($this->memberinfo['phpssouid']);
 		$grouplist = getcache('grouplist');
 		$memberinfo['groupname'] = $grouplist[$memberinfo[groupid]]['name'];
         //print_r($memberinfo['userid']);
     	//生成选校报告
 		$list=pc_base::load_model('school_data_model');
 		$list1=pc_base::load_model('user_report_model');
 		if(isset($_POST['dosubmit4'])) {
 			//验证曾就读学校
 			$average=$_POST['average'];
			$gmat=$_POST['gmat'];
			$gpa=$_POST['gpa'];
			$gre=$_POST['gre'];
			$toefl=$_POST['toefl'];
			$sat=$_POST['sat'];
			$ielts=$_POST['ielts'];
			$zhuanye=$_POST['zhuanye'];
 			$oldschool=$_POST['oldschool'];
 			$schoolstyle=$this->common_hightschool($oldschool);
 		    //指标都在一二级别的情况*/
 		    //1,2,3,4指标都在一级属于一等学生。*/
 		    if($schoolstyle==1 && $gpa>=88 && $toefl>=110 &&$gmat>=750){
 		    	$student_style=1;
 		    }
 		    //1,2,3,4指标有两个满足在一级，另外两个在二级 为二等学生。*/
 		    elseif(($schoolstyle==1 && $gpa>=88 && $toefl>=104 && $toefl<=109 &&$gmat>=710 &&$gmat<=740)
			||($schoolstyle==1 && $toefl>=110 && $gpa>=85 && $gpa<=87 &&$gmat>=710 &&$gmat<=740)
			||($schoolstyle==1 && $gmat>=750 && $gpa>=85 && $gpa<=87 &&$toefl>=104 &&$toefl<=109)
			||($gpa>=88 && $toefl>=110 && $schoolstyle=2 &&$gmat>=710 &&$gmat<=740)
			||($gpa>=88 && $gmat>=750 && $schoolstyle=2 &&$toefl>=104 &&$toefl<=109)
			||($toefl>=110 && $gmat>=750 && $schoolstyle=2 &&$gpa>=85 &&$gpa<=87)){
 		    	$student_style=2;
 		    }
			//除了以上两种种情况，如果客户四个指标均在2或者以上，为三等学生。（也就是一个一级， 或者全是二级的情况）。*/
 		    elseif(($schoolstyle==1 && $gpa>=85  && $toefl>=104 && $gmat>=710)
			||($gpa>=88 && $schoolstyle <=2 && $toefl>=104 &&$gmat>=710 )
			||($toefl>=110 && $schoolstyle<=2 && $gpa>=85&&$gmat>=710)
			||($gmat>=750 && $schoolstyle<=2 && $gpa>=85  &&$toefl>=104)
			){
 		    	$student_style=3;
 		    }
 		 
		 
 		    //2,3,4指标中出现某一项指标在三级时，其他指标在2级及以上（其他指标在1级或者2级 ）那么判定为三等学生
 			elseif(($gpa>=82 && $gpa<=85 && $schoolstyle<3 && $toefl>=104  &&$gmat>=710)
			||($toefl>=100 && $toefl<=103 && $schoolstyle<3 && $gpa>=85  &&$gmat>=710)
			||($gmat>=680 && $gmat<=710 && $schoolstyle<3 && $gpa>=85  &&$toefl>=104)
			){
 		    	$student_style=3;
 		    }
 		    
 		    //2,3,4指标出现2个或者3个指标在三级，其他指标在2级及以上，判定为四等学生。*/
             elseif(($gpa>=82 && $gpa<=85 && $toefl>=100 && $toefl<=103 && $schoolstyle<3 &&$gmat>=710)
			 ||($gpa>=82 && $gpa<=85 &&$gmat>=680 &&$gmat<=710 && $schoolstyle<3 && $toefl>=104)
			 ||($toefl>=100 && $toefl<=103  &&$gmat>=680 &&$gmat<=710 && $schoolstyle<3  &&  $gpa>=85)
			 ||($toefl>=100 && $toefl<=103  &&$gmat>=680 &&$gmat<=710 && $schoolstyle<3  &&  $gpa>=82&&  $gpa<=85)){
 		    	$student_style=4;
 		    }
 		    //2,3,4 指标都在三级， 就不考虑1指标了， 那么判定为五等生。*/
 		    elseif($gpa>=82 && $gpa<=85 && $toefl>=100 && $toefl<=103  &&$gmat>=680 &&$gmat<=710 ){
 		    	$student_style=4;
 		    }
 		    //当只有指标2或者4其中一个在四级，其他都在三级及以上，判定为五等生。*/
 		    elseif(($gpa>=80 && $gpa<=81.99 && $toefl>=100 && $gmat>=680 ) || ($gmat>=640 && $gmat<=670 && $toefl>=100 &&$gpa>=82)){
 		    	$student_style=5;
 		    }
 		    //当指标2和4同时在四级，3在三级及其以上，判定为六等生。*/
 		    elseif($gpa>=80 && $gpa<=81.99 && $gmat>=660 && $gmat<=690  &&$toefl>=100){
 		    	$student_style=6;
 		    }
 		    //当指标3托福 在四级时，其他指标都在四级和四级以上时，判定为六等学生。*/
 		    elseif($toefl>=92 && $toefl<=99 && $gpa>=80  &&$gmat>=660){
 		    	$student_style=6;
 		    }
 		    //当2为五级，其他在5级以及五级以上时，判定为七等生。*/
 		    elseif($gpa>=76 && $gpa<=80 && $toefl>=85  &&$gmat>=600){
 		    	$student_style=7;
 		    }
 		    //当2为5级，其他三个指标都在三级或者三级以上，定位为六等生*/
 		    elseif($gpa>=76 && $gpa<=80 && $toefl>=100  &&$gmat>=680  &&$schoolstyle<4){
 		    	$student_style=6;
 		    }
 		    //指标出现六级的情况。
             //指标3出现六级，其他都在四级及其以上时，定位为六等生。
             elseif($toefl>=80 && $toefl<=84 && $gpa>=80  &&$gmat>=660){
 		    	$student_style=6;
 		    }
 		    //指标3出现六级，指标四也出现六级，定位为七等生。
             elseif($toefl>=80 && $toefl<=84 && $gmat>=550  &&$gmat<=590){
 		    	$student_style=7;
 		    }
 		    else{
 		    	$student_style=7;
 		    }
       //print_r($schoolstyle);
       //print_r($student_style);exit();	
 		    if($student_style==1){ 
                 $schools1 = $list->query("select * from qu_school_data where country ='1' and  rank between 1 and 10 order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where country ='1' and  rank between 11 and 20 order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
 		        foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where country ='1' and  rank between 21 and 40 order by rand() limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }
             elseif($student_style==2){ 
                 $schools1 = $list->query("select * from qu_school_data where country ='1' and  rank between 1 and 20  order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where  country ='1' and rank between 21 and 40  order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
 		        foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where  country ='1' and rank between 41 and 50 order by rank asc limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }
             elseif($student_style==3){ 
                 $schools1 = $list->query("select * from qu_school_data where  country ='1' and rank between 1 and 30  order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where  country ='1' and rank between 31 and 50  order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
 		        foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where country ='1' and  rank between 51 and 65 order by rank asc limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }
             elseif($student_style==4){ 
                 $schools1 = $list->query("select * from qu_school_data where  country ='1' and rank between 10 and 30  order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where  country ='1' and rank between 31 and 60  order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
 		        foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where  country ='1' and rank between 61 and 80 order by rank asc limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }   
             elseif($student_style==5){ 
                 $schools1 = $list->query("select * from qu_school_data where  country ='1' and rank between 20 and 40  order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where country ='1' and  rank between 41 and 60  order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
 		        foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where  country ='1' and rank between 61 and 80 order by rank asc limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }
             elseif($student_style==6){ 
                 $schools1 = $list->query("select * from qu_school_data where  country ='1' and rank between 40 and 60  order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where  country ='1' and rank between 61 and 90  order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
 		        foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where country ='1' and  rank between 91 and 120 order by rank asc limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }   
             elseif($student_style==7){ 
                 $schools1 = $list->query("select * from qu_school_data where  country ='1' and rank between 80 and 100  order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where  country ='1' and rank between 101 and 120  order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2);
 		        foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2); 
                 $schools3 = $list->query("select * from qu_school_data where  country ='1' and rank between 121 and 150 order by rank asc limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }    
             $data_post=array('sid1'=>$sid1,'sid2'=>$sid2,'sid3'=>$sid3,'cid'=>4,'userid'=>$memberinfo['userid'],'student_style'=>$student_style);//
             //print_r($data_post);exit();
             $r=$list1->insert($data_post);
             if ($r) {
             	showmessage(L('生成选校报告成功，请到会员中心查看'),'/index.php?m=member&c=index&a=s&tab=3');
             }else{
             	showmessage(L('生成选校报告失败'),HTTP_REFERER);
 		    }	
 		}
 	}
 	public function s5() {
 		pc_base::load_sys_class('form', '', 0);
 		//获取会员信息
         $memberinfo = $this->memberinfo;
 		//初始化phpsso
 		$phpsso_api_url = $this->_init_phpsso();
 		//获取头像数组
 		$avatar = $this->client->ps_getavatar($this->memberinfo['phpssouid']);
 		$grouplist = getcache('grouplist');
 		$memberinfo['groupname'] = $grouplist[$memberinfo[groupid]]['name'];
         //print_r($memberinfo['userid']);
     	//生成选校报告
 		$list=pc_base::load_model('school_data_model');
 		$list1=pc_base::load_model('user_report_model');
 		if(isset($_POST['dosubmit5'])) {
 			//验证曾就读学校
 			$average=$_POST['average'];
            $gmat=$_POST['gmat'];
            $gpa=$_POST['gpa'];
            $gre=$_POST['gre'];
            $toefl=$_POST['toefl'];
            $sat=$_POST['sat'];
            $ielts=$_POST['ielts'];
            $zhuanye=$_POST['zhuanye'];
 			$oldschool=$_POST['oldschool'];
 			$schoolstyle=$this->common_hightschool($oldschool);
            if($schoolstyle<3 &&$toefl>=110 && $sat>=2300 && $average>=85){
 		    		$student_style=99;
 		    }
 		    elseif($toefl>=105 || $sat>=2200 || $average>=85){
 		    	$student_style=1;
 		    }
 		    elseif($toefl>=95 || $sat>=2000 || $average>=80){
 		    	$student_style=2;
 		    }
 		    elseif($toefl>=90 || $sat>=1800 || $average>=75){
 		    	$student_style=3;
 		    }
 		    elseif($toefl>=80 || $average>=70){
 		    	$student_style=4;
 		    }
 		    else{
 		        $student_style=0;	
 		    }
			//print_r($schoolstyle);
			
		    //print_r($student_style);exit();
			
 		    if($student_style==99){ 
                 $schools1 = $list->query("select * from qu_school_data where country ='1' and  rank between 1 and 8 order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where country ='1' and  rank between 9 and 15 order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
 		        foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where country ='1' and  rank between 16 and 30 order by rand() limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }
             elseif($student_style==1){ 
                 $schools1 = $list->query("select * from qu_school_data where country ='1' and  rank between 1 and 10  order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where  country ='1' and rank between 11 and 20  order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
 		        foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where  country ='1' and rank between 21 and 40 order by rank asc limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }
             elseif($student_style==2){ 
                 $schools1 = $list->query("select * from qu_school_data where  country ='1' and rank between 10 and 30  order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where  country ='1' and rank between 31 and 50  order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
 		        foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where  country ='1' and rank between 51 and 60 order by rank asc limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3);
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3); 
             }
             elseif($student_style==3){ 
                 $schools1 = $list->query("select * from qu_school_data where  country ='1' and rank between 20 and 40  order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where  country ='1' and rank between 40 and 60  order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
 		        foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where  country ='1' and rank between 61 and 80 order by rank asc limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3); 
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3);
             }
             elseif($student_style==4){ 
                 $schools1 = $list->query("select * from qu_school_data where  country ='1' and rank between 40 and 60  order by rand() limit 3 "); 
 		        $schools_data1 = $list->fetch_array($schools1);
 		        foreach($schools_data1 as $k => $v){
                 $ids1[] = $v[id];
                 }
                 $sid1=implode(',',$ids1);
                 $schools2 = $list->query("select * from qu_school_data where  country ='1' and rank between 61 and 90  order by rand() limit 3 "); 
 		        $schools_data2 = $list->fetch_array($schools2); 
 		        foreach($schools_data2 as $k => $v){
                 $ids2[] = $v[id];
                 }
                 $sid2=implode(',',$ids2);
                 $schools3 = $list->query("select * from qu_school_data where  country ='1' and rank between 91 and 100 order by rank asc limit 2 "); 
 		        $schools_data3 = $list->fetch_array($schools3);
 		        foreach($schools_data3 as $k => $v){
                 $ids3[] = $v[id];
                 }
                 $sid3=implode(',',$ids3); 
             }
             $data_post=array('sid1'=>$sid1,'sid2'=>$sid2,'sid3'=>$sid3,'cid'=>5,'userid'=>$memberinfo['userid'],'student_style'=>$student_style);//
 		
             $r=$list1->insert($data_post);
             if ($r) {
             	showmessage(L('生成选校报告成功，请到会员中心查看'),'/index.php?m=member&c=index&a=s&tab=4');
             }else{
             	showmessage(L('生成选校报告失败'),HTTP_REFERER);
 		    }	
         }
 	}
 	public function s() {
 		pc_base::load_sys_class('form', '', 0);
 		//获取会员信息
         $memberinfo = $this->memberinfo;
 		//初始化phpsso
 		$phpsso_api_url = $this->_init_phpsso();
 		//获取头像数组
 		$avatar = $this->client->ps_getavatar($this->memberinfo['phpssouid']);
 		$grouplist = getcache('grouplist');
 		$memberinfo['groupname'] = $grouplist[$memberinfo[groupid]]['name'];
         //print_r($memberinfo['userid']);
     	//生成选校报告
 		$list=pc_base::load_model('user_report_model');
 		$rs1 = $list->query("SELECT * FROM qu_user_report where cid='1' and userid='".$memberinfo[userid]."' ORDER BY id DESC limit 1");
         $data1 = $list->fetch_array($rs1);
         $rs2 = $list->query("SELECT * FROM qu_user_report where cid='2' and userid='".$memberinfo[userid]."' ORDER BY id DESC limit 1");
         $data2 = $list->fetch_array($rs2);
         $rs3 = $list->query("SELECT * FROM qu_user_report where cid='3' and userid='".$memberinfo[userid]."' ORDER BY id DESC limit 1");
         $data3 = $list->fetch_array($rs3);
         $rs4 = $list->query("SELECT * FROM qu_user_report where cid='4' and userid='".$memberinfo[userid]."' ORDER BY id DESC limit 1");
         $data4 = $list->fetch_array($rs4);
         $rs5 = $list->query("SELECT * FROM qu_user_report where cid='5' and userid='".$memberinfo[userid]."' ORDER BY id DESC limit 1");
         $data5 = $list->fetch_array($rs5);
         $a_sid1=explode(',',$data1[0][sid1]);
         $a_sid2=explode(',',$data1[0][sid2]);
         $a_sid3=explode(',',$data1[0][sid3]);
         $b_sid1=explode(',',$data2[0][sid1]);
         $b_sid2=explode(',',$data2[0][sid2]);
         $b_sid3=explode(',',$data2[0][sid3]);
         $c_sid1=explode(',',$data3[0][sid1]);
         $c_sid2=explode(',',$data3[0][sid2]);
         $c_sid3=explode(',',$data3[0][sid3]);
         $d_sid1=explode(',',$data4[0][sid1]);
         $d_sid2=explode(',',$data4[0][sid2]);
         $d_sid3=explode(',',$data4[0][sid3]);
         $e_sid1=explode(',',$data5[0][sid1]);
         $e_sid2=explode(',',$data5[0][sid2]);
         $e_sid3=explode(',',$data5[0][sid3]);
         include template('member', 'person_report');  
 	}
 }
 ?>