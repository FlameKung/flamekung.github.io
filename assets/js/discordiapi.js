const api = "https://discord.com/api/guilds/1033065899932008498/widget.json"
$.ajax({
  url: api,
  type: 'get',
  dataType: 'json',
  error: function(data) { console.error("wtf"); },
  success: function(data) {
    let invcode = data.instant_invite.split("/")[4]
    window.location.replace(data.instant_invite);

    var invite_data = `https://discord.com/api/v9/invites/${invcode}`;
    $.getJSON(invite_data, function(data) {
      console.log(data.guild.name);
      console.log(data.guild.icon);


    });
  }
})