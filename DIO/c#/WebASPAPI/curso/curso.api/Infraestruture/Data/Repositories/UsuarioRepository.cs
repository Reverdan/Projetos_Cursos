using curso.api.Business.Entities;
using curso.api.Business.Repositories;

namespace curso.api.Infraestruture.Data.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly CursoDBContext _contexto;

        public UsuarioRepository(CursoDBContext contexto)
        {
            _contexto = contexto;
        }

        public void Adicionar(Usuario user)
        {
            _contexto.usuarioDbSet.Add(user);
            _contexto.SaveChanges();
        }

        public void Commit()
        {
            _contexto.SaveChanges();
        }
    }
}
