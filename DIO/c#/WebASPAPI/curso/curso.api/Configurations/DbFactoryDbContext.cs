using Microsoft.EntityFrameworkCore.Design;
using curso.api.Infraestruture.Data;
using Microsoft.EntityFrameworkCore;

namespace curso.api.Configurations

{
    public class DbFactoryDbContext : IDesignTimeDbContextFactory<CursoDBContext>
    {
        public CursoDBContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<CursoDBContext>();
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-R3H4MMJ\\SQLEXPRESS;Initial Catalog=curso;Persist Security Info=True;User ID=sa;Password=rever");
            CursoDBContext contexto = new CursoDBContext(optionsBuilder.Options);
            return contexto;
        }
    }


}
