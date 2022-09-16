using curso.api.Business.Entities;

namespace curso.api.Business.Repositories
{
    public interface IUsuarioRepository
    {
        void Adicionar(Usuario user);
        void Commit();
    }
}
