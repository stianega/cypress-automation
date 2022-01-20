pipeline{
    agent any

    tools {nodejs "node"}

    stages{
        stage('Cypress Parallel Test Suite'){
            parallel{
                stage('Slave Node1'){
                    agent{
                        label "remote_node1"
                    }
                    steps{
                        git url:'https://github.com/stianega/cypress-automation.git'
                        sh 'NO_COLOR=1 npm install'
                        sh 'NO_COLOR=1 npm update'
                        sh 'NO_COLOR=1 npm run ${Script}'
                    }
                }
                stage('Slave Node2'){
                    agent{
                        label "remote_node2"
                    }
                    steps{
                        git url:'https://github.com/stianega/cypress-automation.git'
                        sh 'NO_COLOR=1 npm install'
                        sh 'NO_COLOR=1 npm update'
                        sh 'NO_COLOR=1 npm run ${Script}'
                    }
                }
            }
        }
    }
}
