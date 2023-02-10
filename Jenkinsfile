node {
  def nodeTool = tool 'node'

  stage('Git clone repository') {
    git 'https://github.com/giroud-cyrille/b3-c3-tu-giroud-cyrille/tree/main/test'
  }

  stage('Install depencies') {
    sh 'npm run install'
  }
}