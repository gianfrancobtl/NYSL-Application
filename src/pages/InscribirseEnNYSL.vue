<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <div class="card">
            <div class="header text-center">
              <h4 class="title">INSCRIPCIÓN</h4>
              <p class="category">Inscribite a continuación</p>
              <br />
            </div>
            <div class="card-plain">
              <div id="bodycontent">
                <form method="get" action="show_data.html">
                  <div class="stylized">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Nombre del jugador</span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nombre"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Apellido del jugador</span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Apellido"
                        aria-label="Username"
                        aria-describedby="basic-addon2"
                        name="last_name"
                        id="last_name"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Dirección</span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ej: Rivadavia 103"
                        aria-label="Username"
                        aria-describedby="basic-addon3"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Ciudad</span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Ciudad"
                        aria-describedby="basic-addon4"
                      />
                    </div>

                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Código ZIP</span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Codigo ZIP"
                        aria-describedby="basic-addon5"
                      />
                    </div>
                  </div>
                  <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary" type="button">Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.upgrade-table-btn {
  width: 160px;
  &:first-child {
    margin-right: 10px;
  }
}
</style>
