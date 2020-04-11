import Request from './request.js';
let request = new Request().http

// 登录
export const userLogin = (data) => {
	return request('/api/user/login', {...data}, 'POST')
}

// 获取验证码
export const userSendVerifycode = (data) => {
	return request('/api/user/send-verifycode', {...data}, 'POST')
}

// 校验验证码
export const resetPwdStep1 = (data) => {
	return request('/api/user/reset-pwd/step1', {...data}, 'POST')
}

// 校验后修改密码
export const resetPwdStep2 = (data) => {
	return request('/api/user/reset-pwd/step2', {...data}, 'POST')
}

// 首页
export const home = (params) => {
	return request('/api/home', {params}, 'GET')
}

// 企业招标详情
export const opportunityEnterprise = (params) => {
	return request('/api/opportunity/enterprise/' + params.id, 'GET')
}

// 企业招标分页列表
export const opportunityEnterpriseList = (params, data) => {
	return request('/api/opportunity/enterprise-list', {params, ...data}, 'GET')
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

// 新增潜在客户
export const addPotentialCustomer = (data) => {
	return request('/api/customer/potential-customer', {...data}, 'POST')
}

// 新增拜访记录
export const addVisitRecord = (data) => {
	return request('/api/customer/visit', {...data}, 'POST')
}