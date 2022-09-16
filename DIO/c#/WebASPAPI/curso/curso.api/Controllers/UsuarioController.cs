using Microsoft.AspNetCore.Mvc;
using curso.api.Models.Usuarios;
using Swashbuckle.AspNetCore.Annotations;
using curso.api.Filters;
using Microsoft.EntityFrameworkCore;
using curso.api.Infraestruture.Data;
using curso.api.Business.Entities;

namespace curso.api.Controllers
{
    [Route("api/v1/usuario")]
    [ApiController]
    public class UsuarioController : Controller
    {
        /*public IActionResult Index()
        {
            return View();
        }*/


        [SwaggerResponse(statusCode: 200, description: "Sucesso ao autenticar", type: typeof(LoginViewModelInput))]
        [HttpPost]
        [Route("logar")]
        [ValidacaoModelStateCustomizado]
        public IActionResult Logar(LoginViewModelInput loginViewModelInput)
        {
            return Ok(loginViewModelInput);
        }

        /// <summary>
        /// Este serviço permite cadastrar um usuário
        /// </summary>
        /// <param name="registroViewModelInput"></param>
        /// <returns></returns>

        [HttpPost]
        [Route("registrar")]
        [ValidacaoModelStateCustomizado]
        public IActionResult Registrar(RegistroViewModelInput registroViewModelInput)
        {
            var optionsBuilder = new DbContextOptionsBuilder<CursoDBContext>();
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-R3H4MMJ\\SQLEXPRESS;Initial Catalog=curso;Persist Security Info=True;User ID=sa;Password=rever");
            CursoDBContext contexto = new CursoDBContext(optionsBuilder.Options);

            var migracoesPendentes = contexto.Database.GetPendingMigrations();
            if(migracoesPendentes.Count() > 0)
            {
                contexto.Database.Migrate();
            }

            Usuario user = new Usuario();
            user.login = registroViewModelInput.Login;
            user.senha = registroViewModelInput.Senha;
            user.email = registroViewModelInput.Email;
            contexto.usuarioDbSet.Add(user);
            contexto.SaveChanges();

            return Created("", registroViewModelInput);
        }


    }
}
