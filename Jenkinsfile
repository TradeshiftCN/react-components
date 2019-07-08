// This Jenkinsfile uses the declarative syntax. If you need help, check
// Overview and structure: https://jenkins.io/doc/book/pipeline/syntax/
// For plugins and steps:  https://jenkins.io/doc/pipeline/steps/
// For Github integration: https://github.com/jenkinsci/pipeline-github-plugin
// For credentials:        https://jenkins.io/doc/book/pipeline/jenkinsfile/#handling-credentials
// For credential IDs:     https://ci.ts.sv/credentials/store/system/domain/_/
// Tools (JDK, Maven):     https://ci.ts.sv/configureTools/
// Environment variables:  env.VARIABLE_NAME

pipeline {
    agent any // Put node restrictions here, if any
    triggers {
        issueCommentTrigger('^(retest|npm publish)$')
    }
    stages {
        stage('Initialise PR') {
            when { changeRequest() }
            steps {
                githubNotify(status: 'PENDING', context: 'semantic-release', description: 'Not analysed')
            }
        }
        stage('Clone') {
            steps {
                checkout scm
            }
        }
        stage('Setup nodejs') {
            steps {
                useNodeJS()
            }
        }
        stage('npm install') {
            steps {
                sh 'which node; node -v'
                sh 'which npm; npm -v'
                sh 'npm install'
            }
        }

        stage('Build and test') {
            environment {
                CODECOV_TOKEN="4b261399-ecbf-48ce-b85f-d631723f078d"
            }
            steps {
                sh "npm run validate && codecov"
            }
            post {
                always {
                    checkstyle pattern:'build/checkstyle/*.xml', unstableTotalAll: '0', usePreviousBuildAsReference: true
                    junit testResults: 'build/junit/*.xml', allowEmptyResults: true
                }
            }
        }

        stage('npm publish') {
            when {
                changeRequest()
                expression { return pullRequest.comments.any { it.body == 'npm publish' } }
            }
            environment {
                NPM_TOKEN = credentials 'jenkins-npm-rw-token'
            }
            steps {
                npmPublish()
            }

        }

        stage('Semantic release') {
            environment {
                NPM_TOKEN = credentials 'jenkins-npm-rw-token'
            }
            steps {
                semanticVersion()
            }
        }
    }
}
