pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Clone Git repository') {
      steps {
        git 'https://github.com/giroud-cyrille/b3-c3-tu-giroud-cyrille'
      }
    }
     
    stage('Install dependencies') {
      steps {
        withNode(nodejs : 'node') {
                bat'npm install'
            }
      }
    }  
      
    stage('Run Test') {
      steps {
        withNode(nodejs: 'node') {
        bat 'npm run test'
        }
      }
    }
  }
}