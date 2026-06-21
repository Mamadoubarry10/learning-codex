pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Pulling code from GitHub'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t fatoumata12/my-node-app:latest .'
            }
        }

        stage('Test') {
            steps {
                echo 'Run tests here'
            }
        }

        stage('Push') {
            steps {
                echo 'Push image to Docker Hub'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy to Kubernetes'
            }
        }
    }
}