import Request from './request.js';
let request = new Request().http

// 登录
export const userLogin = (data) => {
	return request('/api/user/login', {...data}, 'POST')
}

// 校验验证码
export const resetPwdStep1 = (data) => {
	return request('/api/user/reset-pwd/step1', {...data}, 'POST')
}

// 修改密码
export const resetPwdStep2 = (data) => {
	return request('/api/user/reset-pwd/step2', {...data}, 'POST')
}

// 发送验证码
export const userSendVerifycode = (data) => {
	return request('/api/user/send-verifycode', {...data}, 'POST')
}

// 首页
export const home = (params) => {
	return request('/api/home', {...params}, 'GET')
}

// 企业招标分页列表
export const opportunityEnterpriseList = (params, data) => {
	return request('/api/opportunity/enterprise-list', {params, ...data}, 'GET')
}

// 企业招标详情
export const opportunityEnterprise = (params) => {
	return request('/api/opportunity/enterprise/' + params.id, 'GET')
}

// 公海客户分页列表
export const opportunityCustomerList = (params, data) => {
	return request('/api/opportunity/public-customer-list', {params, ...data}, 'GET')
}

// 公海客户详情
export const opportunityPublicCustomerDetail = (params) => {
	return request('/api/opportunity/public-customer/' + params.id, 'GET')
}

// 拜访记录分页列表
export const visitList = (params) => {
	return request('/api/opportunity/public-customer/' + params.id + '/visit-list','GET')
}

// 合作客户列表
export const cooperationCustomerList = (params) => {
	return request('/api/customer/cooperation/list', {...params}, 'GET')
}

// 新增潜在客户
export const addPotentialCustomer = (data) => {
	return request('/api/customer/potential-customer', {...data}, 'POST')
}

// 潜在客户详情
export const potentialCustomerDetail = (params) => {
	return request('/api/customer/potential/detail/' + params.id, 'GET')
}

// 潜在客户列表
export const potentialCustomerList = (params) => {
	return request('/api/customer/potential/list', {...params}, 'GET')
}

// 新增拜访记录
export const addVisitRecord = (data) => {
	return request('/api/customer/visit', {...data}, 'POST')
}

// 拜访记录
export const customerVisitRecording = (params) => {
	return request('/api/customer/visit/recording/' + params.id, 'GET' )
}

// 更新手机号
export const accountChangePhone = (data) => {
	return request('/api/account/change/phone', {...data}, 'POST')
}

// 我的合作客户列表
export const accountCooperation = (params) => {
	return request('/api/account/cooperation', {...params}, 'GET')
}

// 添加商机
export const accountCreate = (params) => {
	return request('/api/account/create/' + params.id,{...params}, 'POST')
}

// 获取用户资料
export const accountInfo = (params) => {
	return request('/api/account/info', {...params}, 'GET')
}

// 修改手机号
export const accountInspectPhone = (data) => {
	return request('/api/account/inspect/phone', {...data}, 'POST')
}

// 商机列表
export const accountOpportunity = (params) => {
	return request('/api/account/opportunity', {...params}, 'GET')
}

// 我的潜在客户列表
export const accountPotential = (params) => {
	return request('/api/account/potential', {...params}, 'GET')
}

// 修改头像

export const accountUpdateAvatar = (data) => {
	return request('/api/account/update/avatar', {...data}, 'POST')
}

// 修改性别
export const accountUpdateGender = (data) => {
	return request('/api/account/update/gender', {...data}, 'POST')
}

// 修改姓名
export const accountUpdateName = (data) => {
	return request('/api/account/update/name', {...data}, 'POST')
}

// 修改密码
export const accountUpdateResetPass = (data) => {
	return request('/api/account/update/resetPass', {...data}, 'POST')
}