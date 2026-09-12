pipeline {
    agent {
        docker {
            image 'node:22-bookworm'
        }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh '''
                    corepack enable
                    corepack prepare pnpm@10.30.3 --activate

                    echo "Node:"
                    node --version

                    echo "pnpm:"
                    pnpm --version

                    pnpm install --frozen-lockfile
                '''
            }
        }

        stage('Lint') {
            steps {
                sh 'pnpm lint'
            }
        }

        stage('Build') {
            steps {
                sh 'pnpm build'
            }
        }
    }
}