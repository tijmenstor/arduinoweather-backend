node('swarm-build-agent') {
    def app

    stage('Checkout SCM') {
        checkout scm
    }

    stage('Build') {
        withCredentials([usernamePassword(usernameVariable: 'DB_USERNAME', passwordVariable: 'DB_PASSWORD', credentialsId: 'arduino-backend-creds')]) {
            sh 'set +x'
            sh "export DB_USERNAME=$DB_USERNAME"
            sh "export DB_PASSWORD=$DB_PASSWORD"
            sh "export DB_HOST=tijmenstortest.nl"
        }
        sh 'set -x'
        app = docker.build("tijmen34/arduinoweather-backend")
    }
    stage('Push Image') {
        docker.withRegistry('https://registry.hub.docker.com', 'tijmen34-dockerhub-creds') {
            app.push("${env.BUILD_NUMBER}")
            app.push("lts")
        }
    }
    stage('Deploy') {
         sh "docker service update --image tijmen34/arduinoweather-backend:${env.BUILD_NUMBER} arduino-backend"
    }
}
