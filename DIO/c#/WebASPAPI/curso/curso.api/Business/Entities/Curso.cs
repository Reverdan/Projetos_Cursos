namespace curso.api.Business.Entities
{
    public class Curso
    {
        public int codigo { get; set; }
        public string nome { get; set; }
        public string descricao { get; set; }
        public int codigoUsuario { get; set; }
        public virtual Usuario usuario { get; set; }
    }
}
