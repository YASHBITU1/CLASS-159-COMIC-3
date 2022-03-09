AFRAME.registerComponent("circlecursor",{
  schema:{selectedItemId:{default:"",type:"string"}},

  init:function(){
      this.handleMouseEnter()
      this.handleMouseLeave()
  },
  handleMouseEnter:function(){
      this.el.addEventListener("mouseenter",()=>{
          this.handlePlaceList()
      })
  },
  handlePlaceList:function(){
      const ElementId = this.el.getAttribute("id")
      const PlacesId = ["Marvel","Deadpool","Black Panther","Batman"]
      if(PlacesId.includes(ElementId)){
          const Element = document.querySelector("#posters-container")
          Element.setAttribute("circlecursor",{selectedItemId:ElementId})
          this.el.setAttribute("material",{color:"red"})
      }
  },
  handleMouseLeave:function(){
      this.el.addEventListener("mouseleave",()=>{
          const {selectedItemId} = this.data
          if(selectedItemId){
              const el = document.querySelector(`#${selectedItemId}`)
              const id = el.getAttribute("id")
              if(id == selectedItemId){
                  el.setAttribute("material",{color:"white"})
              }
          }
      })
  }

})