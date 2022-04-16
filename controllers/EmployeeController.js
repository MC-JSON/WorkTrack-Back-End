const { Employee } = require('../models')

const GetEmployees = async (req, res) => {
  try {
    let businessId = parseInt(req.params.business_id)
    const employees = await Employee.findAll({
      where: { businessId: businessId }
    })
    res.send(employees)
  } catch (error) {
    throw error
  }
}

const GetEmployee = async (req, res) => {
  try {
    let businessId = parseInt(req.params.business_id)
    let employeeId = parseInt(req.params.employee_id)
    const employee = await Employee.findAll({
      where: { id: employeeId, businessId: businessId }
    })
    res.send(employee)
  } catch (error) {
    throw error
  }
}

const CreateEmployee = async (req, res) => {
  try {
    let businessId = parseInt(req.params.business_id)
    let logId = parseInt(req.params.log_id)
    let newEmployee = {
      businessId,
      logId,
      ...req.body
    }
    let employee = await Employee.create(newEmployee)
    res.send(employee)
  } catch (error) {
    throw error
  }
}

const UpdateEmployee = async (req, res) => {
  try {
    // let businessId = parseInt(req.params.business_id)
    let employeeId = parseInt(req.params.employee_id)
    let updatedEmployee = await Employee.update(req.body, {
      where: { id: employeeId }
    })
    res.send(updatedEmployee)
  } catch (error) {
    throw error
  }
}

const DestroyEmployee = async (req, res) => {
  try {
    // let businessId = parseInt(req.params.business_id)
    let employeeId = parseInt(req.params.employee_id)
    await Employee.destroy({
      where: { id: employeeId }
    })
    res.send({
      message: `Employee with an id of ${employeeId} has been removed.`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetEmployee,
  GetEmployees,
  CreateEmployee,
  UpdateEmployee,
  DestroyEmployee
}
