$(window).on("load", function() {

    var vEditPanels = new Vue({
        el: '#main',
        data: {
        isHidden:{d: false, p: true,t: true,a: true,c: true,f: true},
		about_textarea: "Here you will learn how to make a website. They offer free tutorials in all web development technologies.",
		contact_textarea: "At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.",
		demoList: [{ url: "https://www.youtube.com/watch?v=cS2cp1NttBY", title: "banda machos", description: "Si tu boquita fuera"} ] ,
		demoInput: {url: '', title: '', description: ''},
		editingDemo: false,
		editIndex: 0,
		faqList: [{ question: "How do you do this?", answer: "like this"},{ question: "How do you do that?", answer: "like that"} ] ,		
		faqInput: {question: '', answer: ''},
		alertAction: '',
		alertMessage: '',
        },
        methods:{
            toggleEditMenu: function(item){
				console.log("updating edit panel");
                for(const prop in this.isHidden)
				{
					if(prop == item){
						$("#"+prop).show();
					}else{
						$("#"+prop).hide();
					}
				}
				return this.isHidden;
            },
			saveAbout: function(){				
				console.log("Saving about text: ");
				console.log(this.about_textarea);
			},
			saveContact: function(){				
				console.log("Saving contact text: ");
				console.log(this.contact_textarea);
			},
			saveDEMO: function(){
				if(this.editingDemo){
					this.demoList.splice(this.editIndex, 1);
					this.demoList.splice(this.editIndex, 0, this.demoInput);
					this.clearDEMO();
					$("#demoDialog").dialog('close');
					this.alertMessage = 'DEMO Updated';
					this.alertAction = 'SUCCESS';						
					this.showAlert();				 
				}
				else{
					this.demoList.push(this.demoInput);
					this.clearDEMO();
					$("#demoDialog").dialog('close');
					this.alertMessage = 'DEMO Added';
					this.alertAction = 'SUCCESS';						
					this.showAlert();
				}
			},
			editDEMO: function(item){	
				console.log(item);
				for(i = 0; i< this.demoList.length;i++){
					if(item.title == this.demoList[i].title){
						this.editIndex = i;
						break;
					}					
				}
				console.log(this.editIndex);
				this.openDemoDialog();
				this.alertAction = "EDIT DEMO";
				$("#demoDialog").dialog('option', 'title', this.alertAction); 					
				this.demoInput.url = item.url;
				this.demoInput.title = item.title;
				this.demoInput.description = item.description;
				this.editingDemo = true;
			},			
			clearDEMO: function(){
				this.demoInput = {url: '', title: '', description: ''};
			},
			deleteDEMO: function(item){
				this.demoList.pop(item);
				this.alertMessage = 'DEMO deleted';
				this.alertAction = 'SUCCESS';						
				this.showAlert();
			},			
			saveFAQ: function(){
				this.faqList.push(this.faqInput);
				this.clearFAQ();
				$("#faqDialog").dialog('close');
				this.alertMessage = 'FAQ added';
				this.alertAction = 'SUCCESS';						
				this.showAlert();
			},
			clearFAQ: function(){
				this.faqInput = {inputQ: '', inputA: ''};
			},			
			deleteFAQ: function(item){
				console.log(item.question);
				console.log(item.answer);
				this.faqList.pop(item);
				this.alertMessage = 'FAQ deleted';
				this.alertAction = 'SUCCESS';						
				this.showAlert();
			},	
			openDemoDialog: function(){
				$( "#demoDialog" ).dialog({ modal: true, width: 800, position: { my: 'top', at: 'top+200'}});
				this.alertAction = "ADD A DEMO";
				$("#demoDialog").dialog('option', 'title', this.alertAction);
				this.clearDEMO();
				this.editingDemo = false;
			},
			openProjectDialog: function(){
					$( "#projectDialog" ).dialog({ modal: true });
			},
			openTestimonialDialog: function(){
					$( "#testimonialDialog" ).dialog({ modal: true });
			},
			openFAQDialog: function(){
					$("#faqDialog").dialog({ modal: true, width: 800, position: { my: 'top', at: 'top+200'}});
			},
			showAlert: function(){
				$("#alertDiv").dialog();
				$("#alertDiv").dialog('option', 'title', this.alertAction); 
				$("#alertDiv").prev(".ui-dialog-titlebar").css("background","#e1ffd4");
			},
			hideAlert: function(){
				this.alertAction = '';
				this.alertMessage ='';
				$("#alertDiv").dialog('close');
			}
        }
    })
	

});
