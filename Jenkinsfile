pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/giroud-cyrille/b3-c3-tu-giroud-cyrille'
      }
    }
     
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }  
      
    stage('Run Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}