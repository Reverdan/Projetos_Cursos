using curso.api.Business.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace curso.api.Infraestruture.Data.Mappings
{
    public class UsuarioMapping : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.ToTable("TB_USUARIO");
            builder.HasKey(p => p.codigo);
            builder.Property(p => p.codigo).ValueGeneratedOnAdd();
            builder.Property(p => p.login);
            builder.Property(p => p.senha);
            builder.Property(p => p.email);
        }
    }
}
