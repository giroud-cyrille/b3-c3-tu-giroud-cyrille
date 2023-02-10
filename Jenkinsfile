node {
  def mvnHome = tool 'maven-3.5.2'
  def nodeTool = tool 'node'
  def dockerImage
  def dockerImageTag = "devopsexample${env.BUILD_NUMBER}"

  stage('Git clone repository') {
    git 'https://github.com/giroud-cyrille/b3-c3-tu-giroud-cyrille/tree/main/test'
  }

  stage('Build Project') {
    sh "'${mvnHome}/bin/mvn' -B -DskipTests clean package"
  }

  stage('Install depencies') {
    sh 'npm run install'
  }
}