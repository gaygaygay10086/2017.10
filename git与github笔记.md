# git与github
- git是一个版本控制的工具
- github:网站->程序员基友网站，可以去学习，代码托管，远程仓库，放静态资源的博客域名地址


# 使用教程

    1. 安装工具
    2. 注册账户
    3. github与git相关联
    4. 在github上创建新的项目
    5. 把创建好的项目克隆到本地，形成一个版本

# 命令


### cd 进入盘符    
    
    cd d:
    
### 查看目录
    
    ls或者ll
    
    可以按tab键来补全你的文件名
    
### 退回 
    
    cd ..
    
### 清屏 
    clear
    
### 克隆
    git clone github地址。
    
    有了master才能进行版本控制
    
    工作区添加了一个文件

### 从工作区到暂存区  
    git add 文件名
### 快捷方式（一次性提交多个文件）
    git add .

### 从暂存区到版本区
    git commit -m "注释"

### 形成版本之后要把代码放到远程仓库
    git push origin master

### 当某个（些）文件已经提交过了，如果要直接从工作区到版本区
    git commit -a -m "注释"

### 设置密码长期保存
    git config --global credential.helper store


### 对比：
    查看工作区与暂存区的区别
        git diff
    
    暂存区与版本区的区别
        git diff --cached
    
    工作区与版本区的区别
        git diff master


### 撤销：
    git reset HEAD 文件名 可以将暂存区文件撤销会工作区（绿色变红色）
    
    工作区代码还原暂存区或版本区
        git checkout -- 文件名
    
    git commit -m “注释” --amend
        如果有2个以上文件，一个提交到版本库了，另一个忘记提交，
        可以先将没提交的文件拉到暂存区，然后通过git commit -m “注释” --amend 撤销回来，
        最后自动一次性提交暂存区中的文件和撤销回来的版本形成一个新的版本，
        撤销回来的版本就销毁了，git log查看是否提交成功

### 删除:
    如果手动删除了工作区的文件，也想在git中把它删除
        git rm 文件名

    一次性把工作区与暂存区的文件都删掉
        git rm -f 文件名
    
    git rm --cached 文件名(只删除暂存区，不删除工作区)

    删除整个文件夹：
        git rm -rf 文件名

### 恢复:
    恢复一个文件：

        git checkout 历史记录编码 文件名（要恢复的文件名）   指定的文件还原。

        git reset --hard 历史记录编码 还原整个版本

        git reset --hard HEAD~2  回滚倒数第三个历史记录 （跳过了2个）
    
        如果说git log找不到历史ID，可以通过git reflog去查看操作过的历史记录
