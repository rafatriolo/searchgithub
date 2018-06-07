usuarios.factory('UsuariosSrv', function($resource){
    return {
        RetornoUsuarios: $resource(
            'https://api.github.com/users/:username', {
                username: '@username'
            }),
        RetornoRepoUsuarios: $resource('https://api.github.com/users/:teste/repos',{
            teste: '@teste'
        })
    };
   
});