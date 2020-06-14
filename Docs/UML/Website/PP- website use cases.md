# Actors
## Guest
Just a bystander who is interested in prosthetics art or the idea- potential supporter.  
Can be a company, artist, amputee or other person.
## Amputee
Someone who is unfortunate enough in life and has a need of prosthetic.
Must be able to prove that.
Guest becomes amputee after an amputee request submission.
## Artist
Has interest in using the website as means of attracting attention to themselves.
Wants to help raise money for buying prosthetics via painted used prosthetics 
or is eager to create custom art on a socket that amputee orders.
Guest becomes artist after sending artist application.
## Admin
Website manager, someone who can accept and decline requests from artists and amputees.
Uses the website as a way to automate and ease up some of the flow.
Admin has a premade account and there is no way of guest becoming an admin.
If admin wants to do guest-related stuff, they would need to log out.
## System
Notifications and other automation.

# Use Cases
## Amputee module
Managing requests of painted prosthetics.
### Guest
Someone in need of help (due to financial issues) to get a prosthetic.
#### Request prosthetic. 
There is a menu option to request a prosthetic. This action redirects to prosthetic request submission form.
##### Submit request form
A formal proof *TO BE DEFINED HERE* must be attached with a request for prosthetic.
Also a name, adress and justification message.
This automatically registers them as artist user and emails the credentials. For more info refer to **Users-Subsystem**
*Is there any way to validate the request form?*
### Amputee
A guest that has a proof of being with a disability and requested a prosthetic.
#### View prosthetic request
Able to view their own request: data sent, status, proof.
##### Edit
Change a proof or contact info.
##### Cancel
Delete request entry without any capability of restoring it.
Also deletes amputee account.
### Admin
Manager of amputee requests.
#### View amputee requests
See pending request with amputee contact info and proof of disability attached.
#### Accept prosthetic request
Set request status to confirmed and send a notification that amputee has chosen an artist.
**Important note**: amputee selection process is manual. Admin does the background check by themselves.
After admin checked the amputee and they are legit, after it is confirmed that there is an available prosthetic unit,
they send a link with available artists and their work to the amputee. Amputee then select the artist they like and let the admin know.
The way communication happens between admin and amputee is up to them.
Only after amputee has chosen an artist, admin accepts the prosthetic request.
### System
#### Notify amputee & artist meeting
After an admin confirm amputee request (means that artist, amputee are known, prosthetic available),
an email is sent to amputee and artist.
The email by itself is just a notification, in order to start a dialogue between the three.

## Donations module
### Guest
Supporter of the idea.
#### View donations page
Contain feedback all over the place, also a bunch of thank yous from amputees, artists and supporters of idea.
Also there should be 4 buttons for different kind of donations.
##### Donate a socket
A sockets is the most visible part in a prosthetic, where it mounts.
Donating just a socket is useful, because it can be painted on and it's cheaper than a whole prosthetic.
The donor fills a form with their contact info, so that admin can refer back to them.
Mandatory: email.
##### Donate a prosthetic
Donating a prosthetic can either mean a new prosthetic (most likely company) or old prosthetic (personal, unsued).
The donor fills a form with their contact info, so that admin can refer back to them.
Mandatory: email.
##### Donate money
he/she fills in a form which can be found at the donate link in the menu of the site. The visitor needs to fill in a name, email address
maybe a telephone number and the visitor chooses to donate money on the form.
##### Offer support
he/she fills in a form which can be found at the donate link in the menu of the site. The visitor needs to fill in a name, email address
maybe a telephone number and the visitor chooses to donate a add on the form.
### Admin
Interested in historic donations and potential contacts.
#### View donations
See all historic donations: from whom and what (type), note and date.
##### Filter
By donor, donation typoe and date.
### System
#### Notify next step after prosthetics or socket donation
After a donation is made, a donor gets emailed the next steps, thanks, etc.

## Gallery module
### Guest
Someone who likes art, search for inspiration, maybe an amputee or maybe an artist.
#### View fans gallery
Art that comes from drawing app. Images sorted by latest.
#### View pro gallery 
Art that comes from confirmed artists. Focus on prosthetics, but mixed with their professional artwork.
#### View artwork
Clicking on an image shows a modal window with image zoomed.
The center-piece of an image is prosthetic. Next to it, there are around 3 thumbnails of non-prosthetics art.
Also contact info to artist (optional)
##### Download
Image can be downloaded free of charge
##### Like image
Work both in amateru and pro galleries.
A like would give +1 rep to an artist and +1 rep to the image itself.
##### Share
Clicking share button would copy a link to image in a clipboard.
Refers to the gallery part the image is taken from.
##### Filter
Images can be filtered by author, datetime, likes.

### Admin
Manages artwork.
#### Fans gallery
Contains artwork from uploads of mobile app.
##### Decline
Decline art from drawing app.
##### Confirm
Accept art from drawing app.
##### Prioritize
Arrange top visible art in fans gallery.
#### Professional gallery
Contains artwork from applications of Pro (confirmed) artists and their portfolio.
##### Prioritize
Arrange top visible art in professional gallery.
#### Share available artists gallery
After artist is confirmed, they end up with some sort of availability status that they can update to available.
All artwork of available artists can be pulled down in a kind-off secret gallery that an admin can share.
It's not really a secret gallery, but the link to it is not visible in public website.

## Artist module
Managing artists applications.
### Artist
A professional (either aspiring or already making a living of it) who either wants to help with the charity idea or simply make their name a bit more known.
#### Request to become verified artist
A guest can request to be a verified artist. This redirects them to an application form.
##### Submit application form
Requires contact info and a link to portfolio.
This automatically registers them as artist user and emails the credentials.
This also creates their portfolio (private)
#### View artist application
After artist is logged in, they can view their own applciation.
##### Edit
All the info they submitted can be edited
##### Cancel
Request can be canceled at any time (even after approval). This will result in both request and account removal.
### Admin
#### View artist applications 
All pending, verified and **past (need to figure out how we keep history)** requests are displayed with all the contact info and link to portfolio.
#### Accept
The admin sets the status to approved by using a button. The artist then gets a email that he/she is approved. 
#### Decline
The admin sets the status to disapproved by or using a button or a select list. Also here the artist will receive a email that he/she is disapproved
This also results deleting both the request and a pending artist account.
#### View verified artists
Admin can generate a gallery with artwork of only artists, who flagged themselves as available.
##### Filter by availability
See only already confirmed artists. And filter them by statuses: avaiable, not available for period of time, not available for indefinite period of time.
This automatically registers them as artist user and emails the credentials.
### System
Notifications.
#### Notify old pending requests
When a request is pending for more than 4 weeks, the system should send an email that the request is received but that the submission is on a waiting list. 

## Feedback module
Managing feedback.
### Guest
Someone who supports an idea and wants to say thank you. Or someone who wants to be inspired by all the good feedback.
##### Send feedback
Anyone can send feedback, but it won't be visible publicly until admin approves it.
##### View approved feedback
Only feedback that is approved by the admin can be viewed
### Admin
#### View pending feedback
Sees only pending feedback
##### Accept
Can accept feedback of random people. Accepting it places feedback randomly on the feedback page and the related pages.
##### Decline
Declining feedback removes pending feedback entry.

## Users module
Registration and login.
### System
Manages accounts automatically.
#### Register
Registration process is automated after a request is made (either amputee or artist).
Admin account is premade.
### Amputee, Artist, Admin
The 3 available accounts are: Amputee, Artist and Admin.
Admin is a premade account (can change)
Artist and Amputee can be registered manually.
#### Login
In order to do role-sepcific things, a login is needed.
### System
Manages account removal.
#### Remove registration
After a request is declined or willingly canceled, a system deletes account.
#### Notify about personal data removal
After account gets deleted, a notification is sent to a former user in order to comply to GDPR.

## Contact module
Contains info on contact info and means of contacting the admin.
### Guest
Can be absolutely anyone who wandered in this section.
Guest is the only role, because there is nothing configurable or visible explicitly to any role.
#### View homepage
Self explanatory- the page that anyone ends up first is homepage.
#### View contacts
Homepage includes contact info. Contact info has means of contacting the admin, contributing to the project.
#### Contact
Homepage has a contact button that you can click, which open contact form.

## Porfolio module
Artist-specific artwork management.
### Guest
Guest would be someone interested in art (pro or not) or someone interested in the charity idea.
#### View artist portfolios
Only published (of confirmed artists) profiles should be visible.
It should have the 4 photos next to their name: one bigger one for prosthetic and 3 more others.
##### Filter portfolios
Filter by artist name, latest artwork, latest artist. Descending and ascending.
##### View artists porfolio
Clicking on a specific artist name or their artwork  should open their portfolio.
###### Get contact info
Artist email and other links to their work. Also their description.
###### View highlight artwork
Painted prosthetic should be the centerpiece of their portfolio.
###### View other art of portfolio
General art should suround the painted prosthetic. 3+ other pictures.
###### View artwork
Clicking on artwork should zoom it in and then the usual functionality, 
such as sharing or liking or downloading should be available.
### Artist
Person to whom belongs the profile.
#### Manage portfolio
Entering a portfolio page as an artist will open their own profile.
##### Edit contact info
All that is diplayed on their page, is editable. Each field has a save button (?)
##### Select main image
Prosthetics image (the centerpiece) should be replacable by another prosthetics image.
##### Add image to portfolio
Other artwork should be addable whenever artist feels like it. No limits.
Private portfolios (not confirmed by admin) cannot have more than 4 images.*
##### Select top images
The 3 visible images of their public profile can be changed however they want. No duplicates allowed.
Disabled for private profile.*
### System
#### Create profile
Creating an artist request automatically creates a private profile.
#### Publish profile
After admin approves artist request, the profile from private becomes public.



