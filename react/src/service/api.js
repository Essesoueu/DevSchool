import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3030'
})


export default class Api {
    async cadastrarAluno(aluno, chamada, curso, turma) {

        let alunoJson = {
            nm_aluno: aluno,
            nr_chamada: chamada,
            nm_curso: curso,
            nm_turma: turma
        };
        
        let r = await api.post('/matricula', alunoJson);
        return r.data;
    }

    async listarAlunos(){
        let r = await api.get('/matricula')
        return r.data;
    }
}