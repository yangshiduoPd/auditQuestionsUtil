modelName=$1

# 新建用户module
nest g mo $modelName /modules/$modelName

# 新建用户controller
nest g co $modelName /modules/$modelName

# 新建用户service
nest g s $modelName /modules/$modelName
