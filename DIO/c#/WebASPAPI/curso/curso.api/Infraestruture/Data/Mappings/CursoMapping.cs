using curso.api.Business.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace curso.api.Infraestruture.Data.Mappings
{
    public class CursoMapping : IEntityTypeConfiguration<Curso>
    {
        public void Configure(EntityTypeBuilder<Curso> builder)
        {
            builder.ToTable("TB_CURSO");
            builder.HasKey(p => p.codigo);
            builder.Property(p => p.codigo).ValueGeneratedOnAdd();
            builder.Property(p => p.nome);
            builder.Property(p => p.descricao);
            builder.HasOne(p => p.usuario).WithMany().HasForeignKey(fk => fk.codigoUsuario);
        }
    }
}
